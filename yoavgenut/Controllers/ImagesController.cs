using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace yoavgenut.Controllers
{
  public class ImagesController : Controller
  {
    // GET: /Images/
    [AcceptVerbs(HttpVerbs.Get)]
    //[OutputCache(CacheProfile = "CustomerImages")]
    public ActionResult Index(string imageName)
    {
      FileStream stream = new FileStream(AppDomain.CurrentDomain.BaseDirectory + "/images/logo.png", FileMode.Open, FileAccess.Read);
      FileStreamResult result = new FileStreamResult(stream, "image/png");
      result.FileDownloadName = "logo.png";
      return result;
    }
  }
}
