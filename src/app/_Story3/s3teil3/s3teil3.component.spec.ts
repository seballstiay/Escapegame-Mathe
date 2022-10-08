import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3teil3Component } from './s3teil3.component';

describe('S3teil3Component', () => {
  let component: S3teil3Component;
  let fixture: ComponentFixture<S3teil3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3teil3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3teil3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
