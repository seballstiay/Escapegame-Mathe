import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1aufgabe4Component } from './a1aufgabe4.component';

describe('A1aufgabe4Component', () => {
  let component: A1aufgabe4Component;
  let fixture: ComponentFixture<A1aufgabe4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A1aufgabe4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A1aufgabe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
