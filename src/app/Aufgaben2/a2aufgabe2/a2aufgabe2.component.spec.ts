import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2aufgabe2Component } from './a2aufgabe2.component';

describe('A2aufgabe2Component', () => {
  let component: A2aufgabe2Component;
  let fixture: ComponentFixture<A2aufgabe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2aufgabe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2aufgabe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
