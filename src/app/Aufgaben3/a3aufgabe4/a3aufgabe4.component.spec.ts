import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3aufgabe4Component } from './a3aufgabe4.component';

describe('A3aufgabe4Component', () => {
  let component: A3aufgabe4Component;
  let fixture: ComponentFixture<A3aufgabe4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3aufgabe4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3aufgabe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
