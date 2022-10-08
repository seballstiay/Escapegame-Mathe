import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2aufgabe7Component } from './a2aufgabe7.component';

describe('A2aufgabe7Component', () => {
  let component: A2aufgabe7Component;
  let fixture: ComponentFixture<A2aufgabe7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2aufgabe7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2aufgabe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
