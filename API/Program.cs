using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            //build host
            var host = CreateHostBuilder(args).Build();

            //create host scope
            using var scope = host.Services.CreateScope();

            //get the service provider
            var services = scope.ServiceProvider;

            //try to apply any pending migrations to the database
            try
            {
                //get data context
                var context = services.GetRequiredService<DataContext>();
                var userManager = services.GetRequiredService<UserManager<AppUser>>();
                //migrate
                await context.Database.MigrateAsync();
                //seed data into data base
                await Seed.SeedData(context, userManager);
            }
            catch(Exception ex)
            {
                // Get the logger
                var logger = services.GetRequiredService<ILogger<Program>>();

                //log the error
                logger.LogError(ex, "An error occured during migration");
            }

            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
