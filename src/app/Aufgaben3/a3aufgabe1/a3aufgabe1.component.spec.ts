import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3aufgabe1Component } from './a3aufgabe1.component';

describe('A3aufgabe1Component', () => {
  let component: A3aufgabe1Component;
  let fixture: ComponentFixture<A3aufgabe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3aufgabe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3aufgabe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
