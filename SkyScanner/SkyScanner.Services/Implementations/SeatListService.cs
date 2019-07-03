using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using SkyScanner.DataAccess;
using SkyScanner.DTO;
using SkyScanner.Services.Interfaces;

namespace SkyScanner.Services.Implementations
{
    public class SeatListService : ISeatListService
    {
        private readonly ISkyScannerContext _skyScannerContext;

        public SeatListService(ISkyScannerContext skyScannerContext)
        {
            _skyScannerContext = skyScannerContext;
        }
        public List<SeatListDTO> GetAllSeatsAvailable(int flightScheduleId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var allSeatsAvailable = ctx.SeatLists.Where(x => x.FlightScheduleId == flightScheduleId && x.Available == true).ToList();
                return Mapper.Map<List<SeatListDTO>>(allSeatsAvailable);
            }
        }
    }
}
