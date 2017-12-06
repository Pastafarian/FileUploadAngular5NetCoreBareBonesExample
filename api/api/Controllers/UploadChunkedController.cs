using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class UploadChunkedController : Controller
    {
        /*
        [HttpPost]
        public JsonResult Post(IFormFile file, string type)
        {
            , Route("api/files")]
        }*/

        [HttpPost, DisableRequestSizeLimit]
        public async Task Post()
        {
            var files = Request.Form.Files; // now you have them

            await Task.Delay(2000).ConfigureAwait(false);
            var dd = "";
        }
    }
}