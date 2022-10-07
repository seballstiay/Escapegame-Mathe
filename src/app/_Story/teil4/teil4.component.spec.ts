import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teil4Component } from './teil4.component';

describe('Teil4Component', () => {
  let component: Teil4Component;
  let fixture: ComponentFixture<Teil4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teil4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teil4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
