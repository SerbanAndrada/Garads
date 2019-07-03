using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using SkyScanner.DataAccess;
using SkyScanner.DTO;
using SkyScanner.Poco;
using SkyScanner.Services.Exceptions;
using SkyScanner.Services.Interfaces;
using System.Data.Entity;

namespace SkyScanner.Services.Implementations
{
    public class ShortListService : IShortListService
    {
        private readonly ISkyScannerContext _skyScannerContext;

        public ShortListService(ISkyScannerContext skyScannerContext)
        {
            _skyScannerContext = skyScannerContext;
        }

        public void AddFlightOnShortList(int userId, int flightId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var newShortList = new ShortList();
                newShortList.UserId = userId;
                newShortList.FlightScheduleId = flightId;
                ctx.ShortLists.Add(newShortList);
                ctx.SaveChanges();
            }
        }

        public void DeleteFlightFromShortList(int userId, int flightId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var shortList = ctx.ShortLists.FirstOrDefault(x => x.UserId == userId && x.FlightScheduleId == flightId);
                ctx.ShortLists.Remove(shortList);
                ctx.SaveChanges();
            }
        }

        public void DeleteFlightFromShortList(int shortListId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var shortList = ctx.ShortLists.FirstOrDefault(x => x.ShortListId == shortListId);
                ctx.ShortLists.Remove(shortList);
                ctx.SaveChanges();
            }
        }

        public List<FlightScheduleDTO> GetAllFlightsForUser(int userId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var allFlights = ctx.ShortLists.Include(x => x.FlightSchedule)
                    .Include(x => x.FlightSchedule.Company)
                    .Include(x => x.FlightSchedule.ArrivalAirport)
                    .Include(x => x.FlightSchedule.DepartureAirport)
                    .Where(x => x.UserId == userId).ToList();
                return Mapper.Map<List<FlightScheduleDTO>>(allFlights.Select(x=>x.FlightSchedule));
            }
        }
    }
}
