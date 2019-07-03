namespace SkyScanner.DTO
{
    public class SeatListDTO
    {
        public int SeatId { get; set; }
        //public FlightScheduleDTO FlightScheduleDTO { get; set; }
        public int FlightScheduleId { get; set; }
        public string SeatName { get; set; }
        public bool Available { get; set; }
    }
}
