import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2teil7Component } from './s2teil7.component';

describe('S2teil7Component', () => {
  let component: S2teil7Component;
  let fixture: ComponentFixture<S2teil7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2teil7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2teil7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
