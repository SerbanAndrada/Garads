namespace SkyScanner.Poco
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Ticket")]
    public partial class Ticket
    {
        public int TicketId { get; set; }

        public int SeatId { get; set; }

        public int FlightScheduleId { get; set; }

        public int UserId { get; set; }

        public int AddressId { get; set; }

        [Required]
        [StringLength(13)]
        public string CNP { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(1000)]
        public string Comments { get; set; }

        public virtual Address Address { get; set; }

        public virtual FlightSchedule FlightSchedule { get; set; }

        public virtual SeatList SeatList { get; set; }

        public virtual User User { get; set; }
    }
}
