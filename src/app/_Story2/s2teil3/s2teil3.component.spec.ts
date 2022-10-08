import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2teil3Component } from './s2teil3.component';

describe('S2teil3Component', () => {
  let component: S2teil3Component;
  let fixture: ComponentFixture<S2teil3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2teil3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2teil3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
