import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1aufgabe5Component } from './a1aufgabe5.component';

describe('A1aufgabe5Component', () => {
  let component: A1aufgabe5Component;
  let fixture: ComponentFixture<A1aufgabe5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A1aufgabe5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A1aufgabe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
