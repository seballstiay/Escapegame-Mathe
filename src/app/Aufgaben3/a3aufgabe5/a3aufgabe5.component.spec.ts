import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3aufgabe5Component } from './a3aufgabe5.component';

describe('A3aufgabe5Component', () => {
  let component: A3aufgabe5Component;
  let fixture: ComponentFixture<A3aufgabe5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3aufgabe5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3aufgabe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
