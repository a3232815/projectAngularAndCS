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


    public class UserController : ApiController
    {
        // GET: api/User
        public List<User> Get()
        {
            return DB.allUsers;
        }
        public User Get(string name, string password)
        {
            for (int i = 0; i < DB.allUsers.Count; i++)
            {
                if (DB.allUsers[i].name == name && DB.allUsers[i].password == password)
                    return DB.allUsers[i];
            }
            return null;
        }

        // GET: api/User/5
        public int GetItem(User value)
        //מחזיר 2=יש משתמש כזה והסיסמא נכונה, 1=יש משתמש כזה והסיסמא שגויה ,0=אין משתמש כזה
        //ן 1-=משתמש אינו קיים וסיסמא קיימת
        {
            for (int i = 0; i < DB.allUsers.Count; i++)
            {
                if (DB.allUsers[i].name == value.name)
                {
                    if (DB.allUsers[i] == value)
                    {
                        return 2;//משתמש קיים וסיסמא נכונה
                    }
                    return 1;//משתמש קיים, סיסמא שגויה
                }  
            }
            for (int i = 0; i < DB.allUsers.Count; i++)
            {
                if (DB.allUsers[i].password == value.password) 
                return -1;//משתמש אינו קיים וסיסמא קיימת
             }
            return 0;//אין כזה משתמש
        }

        // POST: api/User
        public string Post([FromBody] User value)// מנסה להכניס משתמש. אם המשתמש קיים איננו מכניס ומחזיר שקר
        {
            switch (GetItem(value))//אין משתמש כזה וגם לא סיסמא כזו ולכן מוסיף בהצלחה
            {
                case 0:
                    {
                        value.id = DB.allUsers.Count + 1;
                        DB.allUsers.Add(value);
                        return "ברוך הבא";
                    }
                case 2: return "משתמש קיים";
                case -1:return "סיסמא קיימת-החלף סיסמא";
                //case 1: return "שם משתמש קיים-החלף שם";
               
            }
            return "שם משתמש קיים-החלף שם";
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
}
