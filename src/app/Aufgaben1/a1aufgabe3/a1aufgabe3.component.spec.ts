import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1aufgabe3Component } from './a1aufgabe3.component';

describe('A1aufgabe3Component', () => {
  let component: A1aufgabe3Component;
  let fixture: ComponentFixture<A1aufgabe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A1aufgabe3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A1aufgabe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
