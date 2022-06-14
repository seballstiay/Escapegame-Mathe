import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrerPanelComponent } from './lehrer-panel.component';

describe('LehrerPanelComponent', () => {
  let component: LehrerPanelComponent;
  let fixture: ComponentFixture<LehrerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LehrerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LehrerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
