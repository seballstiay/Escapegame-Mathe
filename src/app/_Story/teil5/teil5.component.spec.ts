import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teil5Component } from './teil5.component';

describe('Teil5Component', () => {
  let component: Teil5Component;
  let fixture: ComponentFixture<Teil5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teil5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teil5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
