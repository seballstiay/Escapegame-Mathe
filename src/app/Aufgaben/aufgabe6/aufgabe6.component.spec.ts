import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aufgabe6Component } from './aufgabe6.component';

describe('Aufgabe6Component', () => {
  let component: Aufgabe6Component;
  let fixture: ComponentFixture<Aufgabe6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aufgabe6Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Aufgabe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
