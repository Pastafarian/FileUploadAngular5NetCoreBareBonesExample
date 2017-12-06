import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBasicComponent } from './upload-basic.component';

describe('UploadBasicComponent', () => {
  let component: UploadBasicComponent;
  let fixture: ComponentFixture<UploadBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
