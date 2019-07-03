using System.Collections.Generic;
using SkyScanner.DTO;

namespace SkyScanner.Services.Interfaces
{
    public interface IShortListService
    {
        List<FlightScheduleDTO> GetAllFlightsForUser(int userId);

        void AddFlightOnShortList(int userId, int flightId);

        void DeleteFlightFromShortList(int userId, int flightId);

        void DeleteFlightFromShortList(int shortListId);

    }
}
