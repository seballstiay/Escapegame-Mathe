import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielregelnComponent } from './spielregeln.component';

describe('SpielregelnComponent', () => {
  let component: SpielregelnComponent;
  let fixture: ComponentFixture<SpielregelnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielregelnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpielregelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
