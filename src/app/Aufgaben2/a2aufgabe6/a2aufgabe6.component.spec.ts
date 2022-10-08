import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2aufgabe6Component } from './a2aufgabe6.component';

describe('A2aufgabe6Component', () => {
  let component: A2aufgabe6Component;
  let fixture: ComponentFixture<A2aufgabe6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2aufgabe6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2aufgabe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
