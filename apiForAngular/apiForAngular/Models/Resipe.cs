using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularApi.Models
{
    public class Resipe
    {
        public static int count = 0;
        public int idResipe { get; set; }
        public string nameResipe { get; set; }
        public int idKategory { get; set; }
        public int preparationTime { get; set; }
        public int DifficultyLevel { get; set; }
        public DateTime dateAdd { get; set; }
        public List<string> components = new List<string>();
        public List<string> preparation = new List<string>();
        public int idMistamesh { get; set; }
        public string imgSrc { get; set; }
        public Resipe()
        {
            idResipe = count++;
        }
        
    }
}