namespace SkyScanner.Poco
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SeatList")]
    public partial class SeatList
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SeatList()
        {
            Tickets = new HashSet<Ticket>();
        }

        [Key]
        public int SeatId { get; set; }

        public int FlightScheduleId { get; set; }

        [Required]
        [StringLength(4)]
        public string SeatName { get; set; }

        public bool? Available { get; set; }

        public virtual FlightSchedule FlightSchedule { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
