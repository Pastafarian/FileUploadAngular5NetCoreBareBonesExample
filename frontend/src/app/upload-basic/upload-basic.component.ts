import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload-basic',
  templateUrl: './upload-basic.component.html',
  styleUrls: ['./upload-basic.component.scss']
})
export class UploadBasicComponent {

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
}
