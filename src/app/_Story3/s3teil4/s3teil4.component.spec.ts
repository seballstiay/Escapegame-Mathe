import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3teil4Component } from './s3teil4.component';

describe('S3teil4Component', () => {
  let component: S3teil4Component;
  let fixture: ComponentFixture<S3teil4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3teil4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3teil4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
