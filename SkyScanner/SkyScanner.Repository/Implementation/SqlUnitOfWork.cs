using System;
using SkyScanner.DataAccess;
using SkyScanner.Poco;

namespace SkyScanner.Repository.Implementation
{
    public class SqlUnitOfWork : IUnitOfWork, IDisposable
    {

        readonly ISkyScannerContext _skyScannerContext;

        public SqlUnitOfWork(ISkyScannerContext skyScannerContext)
        {
            _skyScannerContext = skyScannerContext;
            _skyScannerContext.Context.Configuration.LazyLoadingEnabled = false;
        }

        //Implementare interfata IUnitOfWork

        public IRepository<User> Users => new SqlRepository<User>(_skyScannerContext);

        public IRepository<Ticket> Tickets => new SqlRepository<Ticket>(_skyScannerContext);

        public IRepository<Address> Addresses => new SqlRepository<Address>(_skyScannerContext);

        public IRepository<Airport> Airports => new SqlRepository<Airport>(_skyScannerContext);

        public IRepository<Company> Companies => new SqlRepository<Company>(_skyScannerContext);

        public IRepository<FlightSchedule> FlightSchedules => new SqlRepository<FlightSchedule>(_skyScannerContext);

        public IRepository<SeatList> SeatLists => new SqlRepository<SeatList>(_skyScannerContext);

        public IRepository<ShortList> ShortLists => new SqlRepository<ShortList>(_skyScannerContext);

        public void Commit()
        {
            _skyScannerContext.Context.SaveChanges();
        }

        //Implementare interfata IDisposable
        public void Dispose()
        {
            _skyScannerContext.Context.Dispose();
        }
    }
}
