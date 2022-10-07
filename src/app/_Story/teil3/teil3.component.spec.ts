import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teil3Component } from './teil3.component';

describe('Teil3Component', () => {
  let component: Teil3Component;
  let fixture: ComponentFixture<Teil3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teil3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teil3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
