using AngularApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace apiForAngular.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class KategoryController : ApiController
    {
        //[HttpGet]
        //// GET: api/Resipe
        //public List<Kategory> Get()//מחזיר את כל מערך המתכונים
        //{
        //    return DB.allKategories;
        //}
        

        //// GET: api/Kategory/5
        //public List<Kategory> Get()
        //{
        //    return DB.allKategories;
        //}

        // POST: api/Kategory
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Kategory/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Kategory/5
        public void Delete(int id)
        {
        }
    }
}
