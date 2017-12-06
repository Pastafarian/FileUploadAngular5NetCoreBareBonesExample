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

@NgModule({
  declarations: [
    AppComponent,
    UploadChunkedComponent,
    UploadBasicComponent,
    ApiPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
