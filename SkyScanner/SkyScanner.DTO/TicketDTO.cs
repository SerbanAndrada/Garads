namespace SkyScanner.DTO
{
    public class TicketDTO
    {
        public int TicketId { get; set; }

        public int SeatId { get; set; }
        public SeatListDTO SeatList { get; set; }

        public int FlightScheduleId { get; set; }
        public FlightScheduleDTO FlightSchedule { get; set; }

        public int UserId { get; set; }

        public int AddressId { get; set; }
        public AddressDTO Address { get; set; }

        public string  CNP { get; set; }
        public string Name { get; set; }
        public string Comments { get; set; }
    }
}
