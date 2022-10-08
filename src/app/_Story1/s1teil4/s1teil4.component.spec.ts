import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1teil4Component } from './s1teil4.component';

describe('S1teil4Component', () => {
  let component: S1teil4Component;
  let fixture: ComponentFixture<S1teil4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1teil4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1teil4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
