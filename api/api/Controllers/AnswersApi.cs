using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class AnswersApi : Controller
    {

    }
}

/*
 {
-> answers
  "questions": {
    "q1": [
      {
        "name": "Mr John Tindell",
        "dateOfBirth": "23/10/1986",
        "role": "Trustee",
        "email": "john.tindell@example.com",
        "uploadId": "1b7cf8b5-4ef7-49ed-ba1b-6ce3b232cb1c",
        "emailSent": true,
        "evidenceId": 1
      },
      {
        "name": "Mr Joe Bloggs",
        "dateOfBirth": "01/08/1987",
        "role": "Scheme Funder",
        "email": "joe.blogs@example.com",
        "uploadId": "d748985c-12fa-4b34-8ae5-62ac45337186",
        "emailSent": false,
        "evidenceId": 0
      }
    ]
  }


 */
