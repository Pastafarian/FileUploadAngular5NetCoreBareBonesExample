import { Routes } from '@angular/router';

import { UploadBasicComponent } from './upload-basic/upload-basic.component';
import { UploadChunkedComponent } from './upload-chunked/upload-chunked.component';
import { ApiPostComponent } from './api-post/api-post.component';

export const APP_ROUTES: Routes = [
  { path: 'upload-basic', component: UploadBasicComponent, pathMatch: 'full' },
  { path: 'upload-chunked', component: UploadChunkedComponent, pathMatch: 'full' },
  { path: 'api-post', component: ApiPostComponent, pathMatch: 'full' },
];
