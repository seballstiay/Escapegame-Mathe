import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3aufgabe3Component } from './a3aufgabe3.component';

describe('A3aufgabe3Component', () => {
  let component: A3aufgabe3Component;
  let fixture: ComponentFixture<A3aufgabe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3aufgabe3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3aufgabe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
