import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1teil5Component } from './s1teil5.component';

describe('S1teil5Component', () => {
  let component: S1teil5Component;
  let fixture: ComponentFixture<S1teil5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1teil5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1teil5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
