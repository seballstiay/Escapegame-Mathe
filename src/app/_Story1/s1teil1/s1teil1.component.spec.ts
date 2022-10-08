import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1teil1Component } from './s1teil1.component';

describe('S1teil1Component', () => {
  let component: S1teil1Component;
  let fixture: ComponentFixture<S1teil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1teil1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1teil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
