import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2aufgabe3Component } from './a2aufgabe3.component';

describe('A2aufgabe3Component', () => {
  let component: A2aufgabe3Component;
  let fixture: ComponentFixture<A2aufgabe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2aufgabe3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2aufgabe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
