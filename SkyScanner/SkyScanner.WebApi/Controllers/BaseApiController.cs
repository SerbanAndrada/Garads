using System.Web.Http;
using SkyScanner.WebApi.Filters;

namespace SkyScanner.WebApi.Controllers
{
    [SkyScannerException]
    public class BaseApiController: ApiController
    {
    }
}