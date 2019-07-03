using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SkyScanner.DTO;

namespace SkyScanner.Services.Interfaces
{
    public interface ISeatListService
    {
         List<SeatListDTO> GetAllSeatsAvailable(int flightScheduleId);
    }
}
