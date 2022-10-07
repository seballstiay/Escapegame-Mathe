import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teil6Component } from './teil6.component';

describe('Teil6Component', () => {
  let component: Teil6Component;
  let fixture: ComponentFixture<Teil6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teil6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teil6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
