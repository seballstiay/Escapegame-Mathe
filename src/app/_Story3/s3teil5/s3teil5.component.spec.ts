import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3teil5Component } from './s3teil5.component';

describe('S3teil5Component', () => {
  let component: S3teil5Component;
  let fixture: ComponentFixture<S3teil5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3teil5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3teil5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
