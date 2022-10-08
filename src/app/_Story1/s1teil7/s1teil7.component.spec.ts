import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1teil7Component } from './s1teil7.component';

describe('S1teil7Component', () => {
  let component: S1teil7Component;
  let fixture: ComponentFixture<S1teil7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1teil7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1teil7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
