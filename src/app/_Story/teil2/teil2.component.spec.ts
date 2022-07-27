import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teil2Component } from './teil2.component';

describe('Teil2Component', () => {
  let component: Teil2Component;
  let fixture: ComponentFixture<Teil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teil2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
