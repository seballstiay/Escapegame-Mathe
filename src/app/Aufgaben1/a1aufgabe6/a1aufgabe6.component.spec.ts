import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1aufgabe6Component } from './a1aufgabe6.component';

describe('A1aufgabe6Component', () => {
  let component: A1aufgabe6Component;
  let fixture: ComponentFixture<A1aufgabe6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A1aufgabe6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A1aufgabe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
