import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3teil7Component } from './s3teil7.component';

describe('S3teil7Component', () => {
  let component: S3teil7Component;
  let fixture: ComponentFixture<S3teil7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3teil7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3teil7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
