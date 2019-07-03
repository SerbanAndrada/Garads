using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using SkyScanner.DTO;
using SkyScanner.Services.Interfaces;

namespace SkyScanner.WebApi.Controllers
{
    [RoutePrefix("api/users")]

    public class UserController: BaseApiController
    {
        private readonly IUserService _userService;
        private readonly IShortListService _shortListService;
        private readonly ITicketService _ticketService;

        public UserController(IUserService userService, IShortListService shortListService, ITicketService ticketService)
        {
            _userService = userService;
            _shortListService = shortListService;
            _ticketService = ticketService;
        }

        //Pentru contul utilizatorului
        [HttpGet]
        [Route]
        public IHttpActionResult GetAllUsers()
        {
            var allUsers = _userService.GetAllUsers();
            return Ok(allUsers);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetUserById(int id)
        {
            var user = _userService.GetUserById(id);

            return Ok(user);
        }
        
        [HttpPost]
        [Route("")]
        public IHttpActionResult AddUser(UserDTO newUser)
        {
            if (newUser == null)
                return BadRequest();

            _userService.AddUser(newUser);
            return Ok();
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult UpdateUser(UserDTO updateUser)
        {
            if (updateUser == null)
                return BadRequest();

            _userService.UpdateUser(updateUser);
            return Ok();
        }

        [HttpDelete]
        [Route("{id:int}/")]
        public IHttpActionResult DeleteUserById(int id)
        {
            _userService.DeleteUser(id);
            return Ok();
        }

        [HttpPost]
        [Route("check")]
        public IHttpActionResult CheckUserById(UserDTO uncheckedUser)
        {
            var checkedUser = _userService.CheckUser(uncheckedUser);
            return Ok(checkedUser);
        }

        //Pentru ShortList

        [HttpGet]
        [Route("{userId:int}/shortList/")]
        public IHttpActionResult GetAllFlightsForUser(int userId)
        {
            var allFlights = _shortListService.GetAllFlightsForUser(userId);
            return Ok(allFlights);
        }

        [HttpPost]
        [Route("{userId:int}/shortList/addFlight/{flightId:int}/")]
        public IHttpActionResult AddFlightOnShortList(int userId, int flightId)
        {
            _shortListService.AddFlightOnShortList(userId, flightId);
            return Ok();
        }

        [HttpDelete]
        [Route("{userId:int}/shortList/deleteFlight/{flightId:int}/")]
        public IHttpActionResult DeleteFlightByFlightId(int userId, int flightId)
        {
            _shortListService.DeleteFlightFromShortList(userId, flightId);
            return Ok();
        }

        [HttpDelete]
        [Route("{userId:int}/shortList/delete/{shortListId:int}/")]
        public IHttpActionResult DeleteFlightByShortListId(int shortListId)
        {
            _shortListService.DeleteFlightFromShortList(shortListId);
            return Ok();
        }

        //Pentru bilete
        //[HttpGet]
        //[Route("{userId:int}/tickets/")]
        //public IHttpActionResult GetTicketsForUser(int userId)
        //{
        //    var allTickets = _ticketService.GetTicketsForUser(userId);
        //    return Ok(allTickets);
        //}

        [HttpGet]
        [Route("{userId:int}/tickets")]
        public IHttpActionResult GetTicketsForUser(int userId)
        {
            var allTickets = _ticketService.GetTicketsForUser(userId);
            return Ok(allTickets);
        }

        [HttpPost]
        [Route("tickets/addTicket")]
        public IHttpActionResult AddTicket(TicketDTO newTicketDTO)
        {
            if (newTicketDTO == null)
                return BadRequest();

            _ticketService.AddTicket(newTicketDTO);
            return Ok();
        }

        [HttpGet]
        [Route("tickets/{ticketId:int}")]
        public IHttpActionResult GetTicket(int ticketId)
        {
            var ticket = _ticketService.GetTicketById(ticketId);
            return Ok(ticket);
        }

        [HttpDelete]
        [Route("tickets/deleteTicket/{ticketId:int}")]
        public IHttpActionResult DeleteTicket(int ticketId)
        {
            _ticketService.DeleteTicket(ticketId);
            return Ok();
        }

        [HttpPut]
        [Route("tickets/changeTicket")]
        public IHttpActionResult ChangeTicket(TicketDTO changedTicket)
        {
            _ticketService.ChangeTicket(changedTicket);
            return Ok();

        }

    }
}