using System.Data.Entity;

namespace SkyScanner.DataAccess
{
    public interface ISkyScannerContext
    {
        DbContext Context { get; }
        IDbSet<T> Set<T>() where T : class;
    }
}
