using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.Data.Entity;
using SkyScanner.DataAccess;
using SkyScanner.DTO;
using SkyScanner.Services.Interfaces;
using SkyScanner.Poco;

namespace SkyScanner.Services.Implementations
{
    public class TicketService : ITicketService
    {
        private readonly IAddressService _addressService;

        public TicketService(IAddressService addressService)
        {
            _addressService = addressService;
        }

        public void AddTicket(TicketDTO newTicketDTO)
        {
            
            using (var ctx = new SkyScannerContext())
            {
                //todo altceva
                //if (newTicketDTO.AddressId == 0)
                //{
                //    var newAddressDTO = newTicketDTO.Address;
                //    var newAddress = Mapper.Map<AddressDTO, Address>(newAddressDTO);
                //    var addedAddress = ctx.Addresses.Add(newAddress);
                //    newTicketDTO.AddressId = addedAddress.AddressId;
                //}

                //Verific daca datele introduse sunt deja salvate in tabela de adrese
                var addressId = 0;
                //var addressId = ctx.Addresses.AsNoTracking().FirstOrDefault(x => x.Country == newTicketDTO.Address.Country && x.City == newTicketDTO.Address.City &&
                //        x.Street == newTicketDTO.Address.Street && x.Number == newTicketDTO.Address.Number).AddressId;
                if (addressId == 0)
                {
                    //Daca nu sunt deja in baza de date adaug o noua adresa
                    addressId = _addressService.AddAddress(newTicketDTO.Address);
                }

                newTicketDTO.AddressId = addressId;
                var newTicket = Mapper.Map<TicketDTO, Ticket>(newTicketDTO);

                //Daca un utilizator cumpara un bilet vam face ca locul respectiv sa nu mai fie isponibil 
                var seat = ctx.SeatLists.Where(x => x.SeatId == newTicket.SeatId).FirstOrDefault();
                seat.Available = false;

                //Adaugam biletul
                ctx.Tickets.Add(newTicket);

                //Salvam toate modificarile
                ctx.SaveChanges();
            }
        }

        public void ChangeTicket(TicketDTO changedTicket)
        {
            //todo ceva
            using( var ctx = new SkyScannerContext())
            {
                var oldTicket = ctx.Tickets.FirstOrDefault(x => x.TicketId == changedTicket.TicketId);

                oldTicket.FlightScheduleId = changedTicket.FlightScheduleId;
                oldTicket.SeatId = changedTicket.SeatId;
                oldTicket.UserId = changedTicket.UserId;
                oldTicket.Name = changedTicket.Name;
                oldTicket.CNP = changedTicket.CNP;
                oldTicket.Comments = changedTicket.Comments;

                var oldAddress = ctx.Addresses.FirstOrDefault(x => x.AddressId == oldTicket.AddressId);

                if (oldAddress.Country != changedTicket.Address.Country || oldAddress.City != changedTicket.Address.City
                    || oldAddress.Street != changedTicket.Address.Street || oldAddress.Number != changedTicket.Address.Number)
                {
                   var addressId = _addressService.AddAddress(changedTicket.Address);
                    oldTicket.AddressId = addressId;
                }

                ctx.SaveChanges();
            }
        }

        public void DeleteTicket(int ticketId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var ticket = ctx.Tickets.FirstOrDefault(x => x.TicketId == ticketId);
                //Verificam ca zborul e in mai mult de doua saptamani
                DateTime flightDate = ctx.FlightSchedules.Where(x => x.FlightScheduleId == ticket.FlightScheduleId).FirstOrDefault().DepartureDT;
                DateTime currentDate = DateTime.Now;
                var daysDifference = (flightDate - currentDate).Days;
                if(daysDifference >= 14)
                {
                    //Daca stergem un bilet facem ca locul sa redevina available
                    ctx.SeatLists.Where(x => x.SeatId == ticket.SeatId).FirstOrDefault().Available = true;
                    ctx.Tickets.Remove(ticket);
                    ctx.SaveChanges();
                }

            }
        }

        public TicketDTO GetTicketById(int ticketId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var ticket = ctx.Tickets
                     .Include(x => x.SeatList)
                    .Include(x => x.FlightSchedule)
                    .Include(x => x.FlightSchedule.Company)
                    .Include(x => x.FlightSchedule.ArrivalAirport)
                    .Include(x => x.FlightSchedule.DepartureAirport)
                    .Include(x => x.Address)
                    .Where(x => x.TicketId == ticketId)
                    .FirstOrDefault();

                //If an user edits a ticket the seat becomes available 
                var seat = ctx.SeatLists.Where(x => x.SeatId == ticket.SeatId).FirstOrDefault();
                seat.Available = true;

                ctx.SaveChanges();

                return Mapper.Map<TicketDTO>(ticket);
            }
        }

        public List<TicketDTO> GetTicketsForUser(int userId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var allTickets = ctx.Tickets.Include(x => x.Address)
                    .Include(x => x.SeatList)
                    .Include(x => x.FlightSchedule)
                    .Include(x => x.FlightSchedule.Company)
                    .Include(x => x.FlightSchedule.ArrivalAirport)
                    .Include(x => x.FlightSchedule.DepartureAirport)
                    .Where(x => x.UserId == userId)
                    .ToList();
                return Mapper.Map<List<TicketDTO>>(allTickets);
            }
        }
    }
}
