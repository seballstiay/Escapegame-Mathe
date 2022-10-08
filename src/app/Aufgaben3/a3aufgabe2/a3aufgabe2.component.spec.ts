import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3aufgabe2Component } from './a3aufgabe2.component';

describe('A3aufgabe2Component', () => {
  let component: A3aufgabe2Component;
  let fixture: ComponentFixture<A3aufgabe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3aufgabe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3aufgabe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
