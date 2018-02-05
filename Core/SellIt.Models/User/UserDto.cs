﻿using System;

namespace SellIt.Models.User
{
    public class UserDto
    {
        public Guid Uid { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? DeletedOn { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}
