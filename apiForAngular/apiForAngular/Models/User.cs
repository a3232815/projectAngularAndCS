﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularApi.Models
{
    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string mail { get; set; }
        public string password { get; set; }
    }
}