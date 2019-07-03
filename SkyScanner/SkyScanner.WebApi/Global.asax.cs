using System.Web.Http;
using SkyScanner.Services;
using SkyScanner.WebApi.Filters;

namespace SkyScanner.WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            // Register WebApi routes
            GlobalConfiguration.Configure(WebApiConfig.Register);

            // Register custom filters
            GlobalConfiguration.Configuration.Filters.Add(new SkyScannerExceptionAttribute());

            // Register AutoMapper profiles
            ServicesBootstrap.ConfigureAutoMapper();

            // Configure Unity
            GlobalConfiguration.Configure(UnityConfig.Register);
        }
    }
}
