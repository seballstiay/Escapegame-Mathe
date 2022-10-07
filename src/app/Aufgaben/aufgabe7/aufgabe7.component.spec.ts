import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aufgabe7Component } from './aufgabe7.component';

describe('Aufgabe7Component', () => {
  let component: Aufgabe7Component;
  let fixture: ComponentFixture<Aufgabe7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aufgabe7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aufgabe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
