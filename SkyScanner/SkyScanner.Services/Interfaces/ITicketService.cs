using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SkyScanner.DTO;

namespace SkyScanner.Services.Interfaces
{
    public interface ITicketService
    {
        List<TicketDTO> GetTicketsForUser(int userId);

        TicketDTO GetTicketById(int ticketId);

        void AddTicket(TicketDTO newTicket);

        void DeleteTicket(int ticketId);

        void ChangeTicket(TicketDTO changedTicket);

    }
}
