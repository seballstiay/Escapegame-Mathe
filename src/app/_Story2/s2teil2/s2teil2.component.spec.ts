import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2teil2Component } from './s2teil2.component';

describe('S2teil2Component', () => {
  let component: S2teil2Component;
  let fixture: ComponentFixture<S2teil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2teil2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2teil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
