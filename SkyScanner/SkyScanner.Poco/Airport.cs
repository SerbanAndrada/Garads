namespace SkyScanner.Poco
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Airport")]
    public partial class Airport
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Airport()
        {
            FlightSchedules = new HashSet<FlightSchedule>();
            FlightSchedules1 = new HashSet<FlightSchedule>();
        }

        public int AirportId { get; set; }

        [Required]
        [StringLength(100)]
        public string AirportName { get; set; }

        [Required]
        [StringLength(100)]
        public string AirportCountry { get; set; }

        [Required]
        [StringLength(100)]
        public string AirportCity { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FlightSchedule> FlightSchedules { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FlightSchedule> FlightSchedules1 { get; set; }
    }
}
