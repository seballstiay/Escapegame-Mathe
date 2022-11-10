import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndeComponent } from './ende.component';

describe('EndeComponent', () => {
  let component: EndeComponent;
  let fixture: ComponentFixture<EndeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
