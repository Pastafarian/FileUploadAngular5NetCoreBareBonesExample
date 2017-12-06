import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UploadChunkedComponent } from './upload-chunked/upload-chunked.component';
import { UploadBasicComponent } from './upload-basic/upload-basic.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './routes';
import { ApiPostComponent } from './api-post/api-post.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UploadChunkedComponent,
    UploadBasicComponent,
    ApiPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
