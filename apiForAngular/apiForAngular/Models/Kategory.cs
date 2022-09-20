using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularApi.Models
{
    public class Kategory
    {
        public int id { get; set; }
        public string name { get; set; }
        public string iconSrc { get; set; }

        public Kategory(int id, string name, string iconSrc)
        {
            this.id = id;
            this.name = name;
            this.iconSrc = iconSrc;
        }
        public Kategory()
        {

        }
    }
}