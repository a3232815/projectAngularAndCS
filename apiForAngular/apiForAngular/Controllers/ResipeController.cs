
using AngularApi.Models;
using System;

using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularApi.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class ResipeController : ApiController
    {
        [HttpGet]
        // GET: api/Resipe
        public List<Resipe> Get()//מחזיר את כל מערך המתכונים
        {
            return DB.allResips;
        }

        [HttpGet]
        // GET: api/Resipe
        public Resipe Get(int id)//מחזיר מתכון מסוים לפי מיקום במערך
        {
            if (id < DB.allResips.Count)
            return DB.allResips[id];
            return null;
        }

        [HttpPost]
        // POST: api/Resipe
        public Resipe Post ([FromBody]Resipe value)//מוסיף פריט למערך המתכונים
        {
            value.idResipe = DB.allResips.Count + 1;
            DB.allResips.Add(value);
            return value;
        }
        [HttpPut]
        // PUT: api/Resipe/5
        public List<Resipe> put(int id, [FromBody]Resipe value)//משנה מתכון מסוים
        {
            DB.allResips[id] = value;
            return DB.allResips;
        }

        [HttpDelete]
        // DELETE: api/Resipe/5
        public List<Resipe> Delete(int id)//מוחק מתכון עפ"י מיקום במערך
        {
           
            DB.allResips.RemoveAt(id);
            return DB.allResips;

        }
    }
}
