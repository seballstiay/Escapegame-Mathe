import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1aufgabe7Component } from './a1aufgabe7.component';

describe('A1aufgabe7Component', () => {
  let component: A1aufgabe7Component;
  let fixture: ComponentFixture<A1aufgabe7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A1aufgabe7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A1aufgabe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
