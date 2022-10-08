import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2aufgabe4Component } from './a2aufgabe4.component';

describe('A2aufgabe4Component', () => {
  let component: A2aufgabe4Component;
  let fixture: ComponentFixture<A2aufgabe4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2aufgabe4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2aufgabe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
