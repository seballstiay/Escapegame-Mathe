import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielBeitretenComponent } from './spiel-beitreten.component';

describe('SpielBeitretenComponent', () => {
  let component: SpielBeitretenComponent;
  let fixture: ComponentFixture<SpielBeitretenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielBeitretenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpielBeitretenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
