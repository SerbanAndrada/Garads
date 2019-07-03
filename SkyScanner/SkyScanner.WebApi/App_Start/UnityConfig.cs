using System.Web.Http;
using CommonServiceLocator;
using SkyScanner.Services;
using Unity;
using Unity.ServiceLocation;
using Unity.WebApi;

namespace SkyScanner.WebApi
{
    public static class UnityConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var container = ServicesBootstrap.ConfigureUnityContainer();

            var locator = new UnityServiceLocator(container);
            ServiceLocator.SetLocatorProvider(() => locator);

            config.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}