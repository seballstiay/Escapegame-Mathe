import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2teil4Component } from './s2teil4.component';

describe('S2teil4Component', () => {
  let component: S2teil4Component;
  let fixture: ComponentFixture<S2teil4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2teil4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2teil4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
