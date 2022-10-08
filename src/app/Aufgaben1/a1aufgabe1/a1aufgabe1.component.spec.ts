import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1aufgabe1Component } from './a1aufgabe1.component';

describe('A1aufgabe1Component', () => {
  let component: A1aufgabe1Component;
  let fixture: ComponentFixture<A1aufgabe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A1aufgabe1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A1aufgabe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
