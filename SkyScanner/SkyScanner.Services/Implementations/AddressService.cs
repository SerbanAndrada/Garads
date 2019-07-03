using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using SkyScanner.DataAccess;
using SkyScanner.DTO;
using SkyScanner.Poco;
using SkyScanner.Services.Interfaces;

namespace SkyScanner.Services.Implementations
{
    public class AddressService : IAddressService
    {
        private readonly ISkyScannerContext _skyScannerContext;

        public AddressService(ISkyScannerContext skyScannerContext)
        {
            _skyScannerContext = skyScannerContext;
        }

        public int AddAddress(AddressDTO newAddressDTO)
        {
            using (var ctx = new SkyScannerContext())
            {
                var newAddress = Mapper.Map<AddressDTO, Address>(newAddressDTO);
                ctx.Addresses.Add(newAddress);
                ctx.SaveChanges();
                var newAddressId = ctx.Addresses.AsNoTracking().FirstOrDefault (x => x.Country == newAddress.Country && x.City == newAddress.City &&
                        x.Street == newAddress.Street && x.Number == newAddress.Number).AddressId;
                return newAddressId;
            }
        }
    }
}
