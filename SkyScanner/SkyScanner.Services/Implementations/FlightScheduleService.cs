using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.Data.Entity;
using SkyScanner.DataAccess;
using SkyScanner.DTO;
using SkyScanner.Services.Interfaces;

namespace SkyScanner.Services.Implementations
{
    public class FlightScheduleService : IFlightScheduleService
    {
        public List<FlightScheduleDTO> GetAllFlights()
        {
            using (var ctx = new SkyScannerContext())
            {
                var allFlights = ctx.FlightSchedules.Include(x => x.Company).Include(x => x.DepartureAirport).Include(x => x.ArrivalAirport).ToList();
                var allFlightsDTO = Mapper.Map<List<FlightScheduleDTO>>(allFlights);
                return Mapper.Map<List<FlightScheduleDTO>>(allFlights);
            }
        }

        public FlightScheduleDTO GetFlightById(int flightId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var flight = ctx.FlightSchedules.Include(x => x.Company).Include(x => x.DepartureAirport).Include(x => x.ArrivalAirport).FirstOrDefault(x=> x.FlightScheduleId == flightId);
                return Mapper.Map<FlightScheduleDTO>(flight);
            }
        }
    }
}
