import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1teil2Component } from './s1teil2.component';

describe('S1teil2Component', () => {
  let component: S1teil2Component;
  let fixture: ComponentFixture<S1teil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1teil2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1teil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
