import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinfuehrunglehrerComponent } from './einfuehrunglehrer.component';

describe('EinfuehrunglehrerComponent', () => {
  let component: EinfuehrunglehrerComponent;
  let fixture: ComponentFixture<EinfuehrunglehrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EinfuehrunglehrerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EinfuehrunglehrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
