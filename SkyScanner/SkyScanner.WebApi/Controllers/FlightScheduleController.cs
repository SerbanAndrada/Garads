using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using SkyScanner.Services.Interfaces;

namespace SkyScanner.WebApi.Controllers
{
    [RoutePrefix("api/FlightSchedule")]
    public class FlightScheduleController: BaseApiController
    {
        private readonly IFlightScheduleService _flightScheduleService;
        private readonly ISeatListService _seatListService;

        public FlightScheduleController(IFlightScheduleService flightScheduleService, ISeatListService seatListService)
        {
            _flightScheduleService = flightScheduleService;
            _seatListService = seatListService;
        }

        //Afiseaza toate zborurile

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAllFlights()
        {
            var allFlights = _flightScheduleService.GetAllFlights();
            return Ok(allFlights);
        }

        [HttpGet]
        [Route("{flightId:int}")]
        public IHttpActionResult GetFlightById(int flightId)
        {
            var flight= _flightScheduleService.GetFlightById(flightId);
            return Ok(flight);
        }

        //Afiseaza toate locurile disponibile pentru un zbor
        [HttpGet]
        [Route("seatsForFlight/{flightScheduleId:int}")]
        public IHttpActionResult GetAllSeatsAvailable(int flightScheduleId)
        {
            var allSeatsAvailable = _seatListService.GetAllSeatsAvailable(flightScheduleId);
            return Ok(allSeatsAvailable);
        }
    }
}