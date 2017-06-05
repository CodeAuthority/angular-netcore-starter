using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace angular2_core_starter.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return File("~/dist/index.html", "text/html");
        }
    }
}
