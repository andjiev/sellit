﻿namespace SellIt.Services.User
{
    using SellIt.Data;
    using SellIt.Models.User;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Runtime.Caching;
    using System.Text;
    using System.Threading.Tasks;

    public class UserService : IUserService
    {
        public readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Guid> CreateUser(CreateUserRequest request)
        {
            User user = new User
            {
                Uid = Guid.NewGuid(),
                CreatedOn = DateTime.Now,
                Name = request.Name,
                Email = request.Email,
                Password = request.Password,
                City = request.City,
                Phone = request.Phone
            };

            _unitOfWork.Users.Insert(user);
            await _unitOfWork.SaveAsync();

            return user.Uid;
        }

        public async Task<string> LoginUser(LoginUserRequest request)
        {

            User user = await _unitOfWork.Users.All()
                .FirstOrDefaultAsync(x => x.Email == request.Email && x.Password == request.Password);

            if (user == null)
            {
                throw new Exception();
            }

            CacheItemPolicy policy = new CacheItemPolicy
            {
                AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(30)
            };

            MemoryCache.Default.Set($"currentUser", user, policy);


            //JwtSecurityToken token = new JwtSecurityToken(user.Uid.ToString());




            return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";
        }
    }
}
