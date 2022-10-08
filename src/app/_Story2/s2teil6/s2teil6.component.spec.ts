import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2teil6Component } from './s2teil6.component';

describe('S2teil6Component', () => {
  let component: S2teil6Component;
  let fixture: ComponentFixture<S2teil6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2teil6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2teil6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
