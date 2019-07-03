using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using SkyScanner.DataAccess;
using SkyScanner.DTO;
using SkyScanner.Poco;
using SkyScanner.Services.Exceptions;
using SkyScanner.Services.Interfaces;

namespace SkyScanner.Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly ISkyScannerContext _skyScannerContext;

        public UserService(ISkyScannerContext skyScannerContext)
        {
            _skyScannerContext = skyScannerContext;
        }

        public void AddUser(UserDTO newUserDTO)
        {
            using (var ctx = new SkyScannerContext())
            {
                var newUser = Mapper.Map<UserDTO, User>(newUserDTO);
                ctx.Users.Add(newUser);
                ctx.SaveChanges();
            }
        }

        public UserDTO CheckUser(UserDTO uncheckedUser)
        {
            using (var ctx = new SkyScannerContext())
            {
                var user = ctx.Users.FirstOrDefault(x => x.UserEmail == uncheckedUser.UserEmail);
                if (user == null)
                {
                    throw new EntityNotFoundException("User not found!");
                }
                else
                {
                    if (user.UserPassword != uncheckedUser.UserPassword)
                        throw new UnauthorizedAccessException();
                }
                return Mapper.Map<UserDTO>(user);
            }
        }

        public void DeleteUser(int userId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var user = ctx.Users.FirstOrDefault(x => x.UserId == userId);
                ctx.Users.Remove(user);
                ctx.SaveChanges();
            }
        }
        
        public List<UserDTO> GetAllUsers()
        {

            using (var ctx = new SkyScannerContext())
            {
                var allUsers = ctx.Users.ToList();
                return Mapper.Map<List<UserDTO>>(allUsers);
            }

            //var result = new List<UserDTO>();
            //var allUsers = _skyScannerContext.Set<User>().ToList();
            //result = Mapper.Map<List<User>, List<UserDTO>>(allUsers);
            //return result;
        }

        
        public UserDTO GetUserById(int userId)
        {
            using (var ctx = new SkyScannerContext())
            {
                var user = ctx.Users.FirstOrDefault(x => x.UserId == userId);
                if (user == null)
                    throw new EntityNotFoundException("User not found!");
                return Mapper.Map<UserDTO>(user);
            }
        }

        public void UpdateUser(UserDTO updateUser)
        {
            using (var ctx = new SkyScannerContext())
            {
                var id = updateUser.UserId;
                var user = ctx.Users.FirstOrDefault(x => x.UserId == id);

                if(updateUser.UserName != null)
                    user.UserName = updateUser.UserName;

                if (updateUser.UserEmail != null)
                    user.UserEmail = updateUser.UserEmail;

                if (updateUser.UserPassword != null)
                    user.UserPassword = updateUser.UserPassword;

                ctx.SaveChanges();
            }
        }
    }
}
