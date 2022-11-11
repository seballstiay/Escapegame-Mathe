import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2teil1Component } from './s2teil1.component';

describe('S2teil1Component', () => {
  let component: S2teil1Component;
  let fixture: ComponentFixture<S2teil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S2teil1Component]
    }).compileComponents();

    fixture = TestBed.createComponent(S2teil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
