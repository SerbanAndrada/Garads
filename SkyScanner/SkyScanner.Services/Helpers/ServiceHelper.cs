using System;
using CommonServiceLocator;

namespace SkyScanner.Services.Helpers
{
    public class ServiceHelper
    {
        public static T GetInstance<T>(string label)
        {
            try
            {
                return string.IsNullOrEmpty(label)
                    ? ServiceLocator.Current.GetInstance<T>()
                    : ServiceLocator.Current.GetInstance<T>(label);
            }
            catch (Exception)
            {
                return ServiceLocator.Current.GetInstance<T>();
            }
        }
  
    }
}
