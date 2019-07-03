namespace SkyScanner.Poco
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ShortList")]
    public partial class ShortList
    {
        public int ShortListId { get; set; }

        public int UserId { get; set; }

        public int FlightScheduleId { get; set; }

        public virtual FlightSchedule FlightSchedule { get; set; }

        public virtual User User { get; set; }
    }
}
