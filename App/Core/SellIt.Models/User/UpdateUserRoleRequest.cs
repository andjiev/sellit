﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SellIt.Models.User
{
    public class UpdateUserRoleRequest
    {
        public string Email { get; set; }
        public int Role { get; set; }
    }
}
