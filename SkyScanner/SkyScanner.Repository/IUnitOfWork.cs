using SkyScanner.Poco;

namespace SkyScanner.Repository
{
    public interface IUnitOfWork
    {
        IRepository<User> Users { get; }
        IRepository<Ticket> Tickets { get; }
        IRepository<Address> Addresses { get; }
        IRepository<Airport> Airports { get; }
        IRepository<Company> Companies { get; }
        IRepository<FlightSchedule> FlightSchedules { get; }
        IRepository<SeatList> SeatLists { get; }
        IRepository<ShortList> ShortLists { get; }
        void Commit();
    }
}
