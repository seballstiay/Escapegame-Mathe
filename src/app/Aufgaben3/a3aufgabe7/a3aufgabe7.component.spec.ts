import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3aufgabe7Component } from './a3aufgabe7.component';

describe('A3aufgabe7Component', () => {
  let component: A3aufgabe7Component;
  let fixture: ComponentFixture<A3aufgabe7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3aufgabe7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3aufgabe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
