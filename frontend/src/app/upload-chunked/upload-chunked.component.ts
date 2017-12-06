import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-chunked',
  templateUrl: './upload-chunked.component.html',
  styleUrls: ['./upload-chunked.component.scss']
})
export class UploadChunkedComponent {

  public uploadProgress: number;
  public total: string;
  public loaded: string;
  public files: any;
  public complete: boolean;

  constructor(private http: HttpClient) {
    this.uploadProgress = 0;
    this.total = '0';
    this.loaded = '0';
    this.complete = false;
  }

  /*
  <input #file type="file" (change)="fileChanged(file.files)" />
  <span *ngIf="uploadProgress > 0 && uploadProgress < 100">
      {{uploadProgress}}%
  </span>
  <p>Total. <span>{{total}}</span></p>
  <p>Loaded. <span>{{loaded}}</span></p>
  <button mat-raised-button color="primary" (click)="upload()">Upload</button>
  */

  fileChanged(files) {
    this.files = files;
  }

  upload2() {
    if (this.files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (const file of this.files) {
      formData.append(file.name, file);
    }

    const req = new HttpRequest('POST', `http://localhost:61632/api/uploadchunked`, formData, {
      reportProgress: true,
    });

    this.http.request(req).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.total = this.formatNumberToKb(event.total);
        this.loaded = this.formatNumberToKb(event.loaded);
        this.uploadProgress = Math.round(100 * event.loaded / event.total);

        if (this.uploadProgress === 100) {
          this.complete = true;
        }

      } else {
        if (event instanceof HttpResponse) {
          this.complete = true;
          console.log('Files uploaded!');
        }
      }
    });
  }

  formatNumberToKb(size: number) {
    return Intl.NumberFormat().format(parseInt((size / 1024).toFixed(0), 10)) + ' kb';
  }
}



 /*
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
        this.total = this.formatNumberToKb(event.total);
        this.loaded = this.formatNumberToKb(event.loaded);
        this.uploadProgress = Math.round(100 * event.loaded / event.total);
      } else {
        if (event instanceof HttpResponse) {
          console.log('Files uploaded!');
        }
      }
    });
  }*/
