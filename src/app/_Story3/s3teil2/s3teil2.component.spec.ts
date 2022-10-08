import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3teil2Component } from './s3teil2.component';

describe('S3teil2Component', () => {
  let component: S3teil2Component;
  let fixture: ComponentFixture<S3teil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3teil2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3teil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
