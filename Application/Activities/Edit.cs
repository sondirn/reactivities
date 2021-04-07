using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                // get the activity from the data base
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                //map the new activity details into the existing activity
                _mapper.Map(request.Activity, activity);

                //save changes
                await _context.SaveChangesAsync();

                //return
                return Unit.Value;
            }
        }
    }
}