import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAufgabenComponent } from './navigation-aufgaben.component';

describe('NavigationAufgabenComponent', () => {
  let component: NavigationAufgabenComponent;
  let fixture: ComponentFixture<NavigationAufgabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationAufgabenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationAufgabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
