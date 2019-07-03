using System;

namespace SkyScanner.DTO
{
    public class FlightScheduleDTO
    {
        public int FlightScheduleId { get; set; }

        public DateTime DepartureDT { get; set; }
        public AirportDTO DepartureAirport { get; set; }
        
        public DateTime ArrivalDT { get; set; }
        public AirportDTO ArrivalAirport { get; set; }

        public CompanyDTO Company { get; set; }

        public int Duration { get; set; }
        public double Price { get; set; }

        //public int DepartureAirportId { get; set; }

        //private AirportDTO _airportDTO;
        //public AirportDTO AirportDTO
        //{
        //    get
        //    {
        //        if (_airportDTO == null)
        //            _airportDTO = LoadAirport(DepartureAirportId);
        //        return _airportDTO;
        //    }
        //}

        //private AirportDTO LoadAirport(int departureAirportId)
        //{
        //    throw new NotImplementedException();
        //}

    }
}
