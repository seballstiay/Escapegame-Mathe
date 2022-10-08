import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1aufgabe2Component } from './a1aufgabe2.component';

describe('A1aufgabe2Component', () => {
  let component: A1aufgabe2Component;
  let fixture: ComponentFixture<A1aufgabe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A1aufgabe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A1aufgabe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
