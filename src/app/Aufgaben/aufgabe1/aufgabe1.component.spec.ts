import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aufgabe1Component } from './aufgabe1.component';

describe('Aufgabe1Component', () => {
  let component: Aufgabe1Component;
  let fixture: ComponentFixture<Aufgabe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aufgabe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aufgabe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
