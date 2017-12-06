import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadChunkedComponent } from './upload-chunked.component';

describe('UploadChunkedComponent', () => {
  let component: UploadChunkedComponent;
  let fixture: ComponentFixture<UploadChunkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadChunkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadChunkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
