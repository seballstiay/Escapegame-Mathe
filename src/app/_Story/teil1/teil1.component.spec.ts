import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teil1Component } from './teil1.component';

describe('Teil1Component', () => {
  let component: Teil1Component;
  let fixture: ComponentFixture<Teil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teil1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
