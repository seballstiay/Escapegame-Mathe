import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { SpielBeitretenComponent } from './spiel-beitreten/spiel-beitreten.component';
import { SpielregelnComponent } from './spielregeln/spielregeln.component';
import { LehrerPanelComponent } from './lehrer-panel/lehrer-panel.component';
import { EinfuehrunglehrerComponent } from './einfuehrunglehrer/einfuehrunglehrer.component';

const routes: Routes = [
  {
    path: '',
    component: HauptseiteComponent
  },
  {
    path: 'spiel-beitreten',
    component: SpielBeitretenComponent
  },
  {
    path: 'spielregeln',
    component: SpielregelnComponent
  },
  {
    path: 'lehrer-panel',
    component: LehrerPanelComponent
  },
  {
    path: 'einfuehrung-lehrer',
    component: EinfuehrunglehrerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
