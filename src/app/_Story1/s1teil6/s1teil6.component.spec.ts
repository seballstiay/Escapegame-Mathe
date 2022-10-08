import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1teil6Component } from './s1teil6.component';

describe('S1teil6Component', () => {
  let component: S1teil6Component;
  let fixture: ComponentFixture<S1teil6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1teil6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1teil6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
