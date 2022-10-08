import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3teil6Component } from './s3teil6.component';

describe('S3teil6Component', () => {
  let component: S3teil6Component;
  let fixture: ComponentFixture<S3teil6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3teil6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3teil6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
