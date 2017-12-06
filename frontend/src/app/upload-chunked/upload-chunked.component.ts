import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-chunked',
  templateUrl: './upload-chunked.component.html',
  styleUrls: ['./upload-chunked.component.scss']
})
export class UploadChunkedComponent {

  public uploadProgress: number;

  constructor(private http: HttpClient) {

    this.uploadProgress = 0;
  }

  upload(files) {

    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (const file of files) {
      formData.append(file.name, file);
    }

    const req = new HttpRequest('POST', `http://localhost:61632/api/uploadchunked`, formData, {
      reportProgress: true,
    });

    this.http.request(req).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * event.loaded / event.total);
      } else {
        if (event instanceof HttpResponse) {
          console.log('Files uploaded!');
        }
      }
    });
  }


  /*
    onFileChanged(e) {
        this.file = e.target.files[0];
    }
    upload(event) {
      const formData: FormData = new FormData();
      formData.append('type', this.fileType);
      formData.append('file', this.file);
      this.http.post('http://localhost:61632/api/UploadChunked', formData).subscribe(res => {
        console.log(res);
      });
    }
  */

}


/*import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload-basic',
  templateUrl: './upload-basic.component.html',
  styleUrls: ['./upload-basic.component.css']
})
export class UploadBasicComponent  {

  file: any;
  fileType = '';

  constructor(private http: HttpClient) {
  }

  onFileChanged(e) {
      this.file = e.target.files[0];
  }

  upload(event) {
    const formData: FormData = new FormData();
    formData.append('type', this.fileType);
    formData.append('file', this.file);
    this.http.post('http://localhost:61632/api/upload', formData).subscribe(res => {
      console.log(res);
    });
  }
} */
