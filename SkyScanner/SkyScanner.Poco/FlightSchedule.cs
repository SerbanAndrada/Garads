namespace SkyScanner.Poco
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FlightSchedule")]
    public partial class FlightSchedule
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public FlightSchedule()
        {
            ShortLists = new HashSet<ShortList>();
            Tickets = new HashSet<Ticket>();
            SeatLists = new HashSet<SeatList>();
        }

        public int FlightScheduleId { get; set; }

        public int CompanyId { get; set; }

        public int DepartureAirportId { get; set; }

        public DateTime DepartureDT { get; set; }

        public int ArrivalAirportId { get; set; }

        public DateTime ArrivalDT { get; set; }

        public int Duration { get; set; }

        public decimal Price { get; set; }

        public virtual Airport ArrivalAirport { get; set; }

        public virtual Airport DepartureAirport { get; set; }

        public virtual Company Company { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ShortList> ShortLists { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Ticket> Tickets { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SeatList> SeatLists { get; set; }
    }
}
