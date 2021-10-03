using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WEB6ELTETRADO.Models;

namespace WEB6ELTETRADO.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<Urun> urunler = new List<Urun>()
            {
                new Urun(){UrunId=1,UrunAdi="Samsung"},
                new Urun(){UrunId=2,UrunAdi="IPhone"}

            };
            
            return View(urunler);
        }

       
    }
}