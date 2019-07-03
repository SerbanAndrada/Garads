using System.Collections.Generic;
using SkyScanner.DTO;

namespace SkyScanner.Services.Interfaces
{
    public interface IUserService
    {
        List<UserDTO> GetAllUsers();

        UserDTO GetUserById(int userId);

        void AddUser(UserDTO newUser);

        void UpdateUser(UserDTO updateUser);

        void DeleteUser(int id);

        UserDTO CheckUser(UserDTO uncheckedUser);


    }
}
