import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { SpielBeitretenComponent } from './spiel-beitreten/spiel-beitreten.component';
import { SpielregelnComponent } from './spielregeln/spielregeln.component';
import { LehrerPanelComponent } from './lehrer-panel/lehrer-panel.component';
import { EinfuehrunglehrerComponent } from './einfuehrunglehrer/einfuehrunglehrer.component';
import { Aufgabe1Component } from './Aufgaben/aufgabe1/aufgabe1.component';
import { Aufgabe2Component } from './Aufgaben/aufgabe2/aufgabe2.component';
import { Aufgabe3Component } from './Aufgaben/aufgabe3/aufgabe3.component';
import { Aufgabe4Component } from './Aufgaben/aufgabe4/aufgabe4.component';
import { Aufgabe5Component } from './Aufgaben/aufgabe5/aufgabe5.component';
import { Aufgabe6Component } from './Aufgaben/aufgabe6/aufgabe6.component';
import { Aufgabe7Component } from './Aufgaben/aufgabe7/aufgabe7.component';
import { Teil1Component } from './_Story2/teil1/teil1.component';
import { Teil2Component } from './_Story2/teil2/teil2.component';
import { Teil3Component } from './_Story2/teil3/teil3.component';
import { Teil4Component } from './_Story2/teil4/teil4.component';
import { Teil5Component } from './_Story2/teil5/teil5.component';
import { Teil6Component } from './_Story2/teil6/teil6.component';
import { Teil7Component } from './_Story2/teil7/teil7.component';

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
  },
  {
    path: 'aufgabe1',
    component: Aufgabe1Component
  },
  {
    path: 'aufgabe2',
    component: Aufgabe2Component
  },
  {
    path: 'aufgabe3',
    component: Aufgabe3Component
  },
  {
    path: 'aufgabe4',
    component: Aufgabe4Component
  },
  {
    path: 'aufgabe5',
    component: Aufgabe5Component
  },
  {
    path: 'aufgabe6',
    component: Aufgabe6Component
  },
  {
    path: 'aufgabe7',
    component: Aufgabe7Component
  },
  {
    path: '2storyteil1',
    component: Teil1Component
  },
  {
    path: '2storyteil2',
    component: Teil2Component
  },
  {
    path: '2storyteil3',
    component: Teil3Component
  },
  {
    path: '2storyteil4',
    component: Teil4Component
  },
  {
    path: '2storyteil5',
    component: Teil5Component
  },
  {
    path: '2storyteil6',
    component: Teil6Component
  },

  {
    path: '2storyteil7',
    component: Teil7Component
  },
  {
    path: '3storyteil1',
    component: 3Teil1Component
  },
  {
    path: '3storyteil2',
    component: 3Teil2Component
  },
  {
    path: '3storyteil3',
    component: 3Teil3Component
  },
  {
    path: '3storyteil4',
    component: 3Teil4Component
  },
  {
    path: '3storyteil5',
    component: 3Teil5Component
  },
  {
    path: '3storyteil6',
    component: 3Teil6Component
  },

  {
    path: '2storyteil7',
    component: Teil7Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
