import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2aufgabe1Component } from './a2aufgabe1.component';

describe('A2aufgabe1Component', () => {
  let component: A2aufgabe1Component;
  let fixture: ComponentFixture<A2aufgabe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2aufgabe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2aufgabe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
