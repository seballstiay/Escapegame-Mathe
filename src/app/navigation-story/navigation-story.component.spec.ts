import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationStoryComponent } from './navigation-story.component';

describe('NavigationStoryComponent', () => {
  let component: NavigationStoryComponent;
  let fixture: ComponentFixture<NavigationStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
