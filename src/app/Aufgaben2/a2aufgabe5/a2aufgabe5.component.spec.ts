import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2aufgabe5Component } from './a2aufgabe5.component';

describe('A2aufgabe5Component', () => {
  let component: A2aufgabe5Component;
  let fixture: ComponentFixture<A2aufgabe5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2aufgabe5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2aufgabe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
