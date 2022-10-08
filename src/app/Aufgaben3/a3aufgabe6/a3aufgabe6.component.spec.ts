import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3aufgabe6Component } from './a3aufgabe6.component';

describe('A3aufgabe6Component', () => {
  let component: A3aufgabe6Component;
  let fixture: ComponentFixture<A3aufgabe6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3aufgabe6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3aufgabe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
