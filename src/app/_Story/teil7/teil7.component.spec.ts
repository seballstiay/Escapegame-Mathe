import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teil7Component } from './teil7.component';

describe('Teil7Component', () => {
  let component: Teil7Component;
  let fixture: ComponentFixture<Teil7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teil7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teil7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
