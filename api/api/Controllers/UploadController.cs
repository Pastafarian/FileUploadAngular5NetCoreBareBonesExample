using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class UploadController : Controller
    {
        [HttpPost]
        public JsonResult Post(IFormFile file, string type)
        {
            return new JsonResult("File '" + file.FileName + "' of type '" + type + "' uploaded successfully");
        }
    }
}
