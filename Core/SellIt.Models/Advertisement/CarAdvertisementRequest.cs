﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SellIt.Models.Advertisement
{
    public class CarAdvertisementRequest : AdvertisementRequest
    {
        public int Year { get; set; }
    }
}