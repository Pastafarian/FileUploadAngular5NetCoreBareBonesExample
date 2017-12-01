import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    this.http.post('http://localhost:57200/api/upload', formData).subscribe(res => {
      console.log(res);
    });
  }
}
