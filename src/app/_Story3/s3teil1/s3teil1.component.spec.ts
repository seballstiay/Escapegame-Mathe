import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3teil1Component } from './s3teil1.component';

describe('S3teil1Component', () => {
  let component: S3teil1Component;
  let fixture: ComponentFixture<S3teil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3teil1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3teil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
