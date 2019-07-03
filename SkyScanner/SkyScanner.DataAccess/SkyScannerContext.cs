namespace SkyScanner.DataAccess
{
    using System.Data.Entity;
    using SkyScanner.Poco;

    public partial class SkyScannerContext : DbContext, ISkyScannerContext
    {
        public SkyScannerContext() : base("name=SkyScannerContext")
        {
            Configuration.ProxyCreationEnabled = false;
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Airport> Airports { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<FlightSchedule> FlightSchedules { get; set; }
        public virtual DbSet<SeatList> SeatLists { get; set; }
        public virtual DbSet<ShortList> ShortLists { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<Ticket> Tickets { get; set; }
        public virtual DbSet<User> Users { get; set; }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>()
                .HasMany(e => e.Tickets)
                .WithRequired(e => e.Address)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Airport>()
                .HasMany(e => e.FlightSchedules)
                .WithRequired(e => e.ArrivalAirport)
                .HasForeignKey(e => e.ArrivalAirportId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Airport>()
                .HasMany(e => e.FlightSchedules1)
                .WithRequired(e => e.DepartureAirport)
                .HasForeignKey(e => e.DepartureAirportId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Company>()
                .HasMany(e => e.FlightSchedules)
                .WithRequired(e => e.Company)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<FlightSchedule>()
                .Property(e => e.Price)
                .HasPrecision(10, 2);

            modelBuilder.Entity<FlightSchedule>()
                .HasMany(e => e.ShortLists)
                .WithRequired(e => e.FlightSchedule)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<FlightSchedule>()
                .HasMany(e => e.Tickets)
                .WithRequired(e => e.FlightSchedule)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<FlightSchedule>()
                .HasMany(e => e.SeatLists)
                .WithRequired(e => e.FlightSchedule)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<SeatList>()
                .HasMany(e => e.Tickets)
                .WithRequired(e => e.SeatList)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Ticket>()
                .Property(e => e.CNP)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.ShortLists)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Tickets)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);
        }

        public DbContext Context
        {
            get { return this; }
        }

        public IDbSet<T> Set<T>() where T : class
        {
            return Context.Set<T>();
        }
    }
}
