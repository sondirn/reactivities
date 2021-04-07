using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController<T> : ControllerBase
    {
        protected readonly ILogger<T> _logger;
        public BaseApiController(ILogger<T> logger)
        {
            _logger = logger;
        }
    }
}