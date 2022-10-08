import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1teil3Component } from './s1teil3.component';

describe('S1teil3Component', () => {
  let component: S1teil3Component;
  let fixture: ComponentFixture<S1teil3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1teil3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1teil3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
