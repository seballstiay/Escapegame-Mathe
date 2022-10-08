import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2teil5Component } from './s2teil5.component';

describe('S2teil5Component', () => {
  let component: S2teil5Component;
  let fixture: ComponentFixture<S2teil5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2teil5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2teil5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
