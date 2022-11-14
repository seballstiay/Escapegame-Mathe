import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { SpielBeitretenComponent } from './spiel-beitreten/spiel-beitreten.component';
import { SpielregelnComponent } from './spielregeln/spielregeln.component';
import { A1aufgabe1Component } from './Aufgaben1/a1aufgabe1/a1aufgabe1.component';
import { A1aufgabe5Component } from './Aufgaben1/a1aufgabe5/a1aufgabe5.component';
import { A1aufgabe4Component } from './Aufgaben1/a1aufgabe4/a1aufgabe4.component';
import { A1aufgabe3Component } from './Aufgaben1/a1aufgabe3/a1aufgabe3.component';
import { A1aufgabe2Component } from './Aufgaben1/a1aufgabe2/a1aufgabe2.component';
import { A2aufgabe1Component } from './Aufgaben2/a2aufgabe1/a2aufgabe1.component';
import { A2aufgabe2Component } from './Aufgaben2/a2aufgabe2/a2aufgabe2.component';
import { A2aufgabe3Component } from './Aufgaben2/a2aufgabe3/a2aufgabe3.component';
import { A2aufgabe4Component } from './Aufgaben2/a2aufgabe4/a2aufgabe4.component';
import { A2aufgabe5Component } from './Aufgaben2/a2aufgabe5/a2aufgabe5.component';
import { S1teil1Component } from './_Story1/s1teil1/s1teil1.component';
import { S1teil2Component } from './_Story1/s1teil2/s1teil2.component';
import { S1teil3Component } from './_Story1/s1teil3/s1teil3.component';
import { S1teil4Component } from './_Story1/s1teil4/s1teil4.component';
import { S1teil5Component } from './_Story1/s1teil5/s1teil5.component';
import { S1teil6Component } from './_Story1/s1teil6/s1teil6.component';
import { S1teil7Component } from './_Story1/s1teil7/s1teil7.component';
import { S2teil1Component } from './_Story2/s2teil1/s2teil1.component';
import { S2teil2Component } from './_Story2/s2teil2/s2teil2.component';
import { S2teil3Component } from './_Story2/s2teil3/s2teil3.component';
import { S2teil4Component } from './_Story2/s2teil4/s2teil4.component';
import { S2teil5Component } from './_Story2/s2teil5/s2teil5.component';
import { S2teil6Component } from './_Story2/s2teil6/s2teil6.component';
import { S2teil7Component } from './_Story2/s2teil7/s2teil7.component';
import { A3aufgabe5Component } from './Aufgaben3/a3aufgabe5/a3aufgabe5.component';
import { A3aufgabe4Component } from './Aufgaben3/a3aufgabe4/a3aufgabe4.component';
import { A3aufgabe3Component } from './Aufgaben3/a3aufgabe3/a3aufgabe3.component';
import { A3aufgabe2Component } from './Aufgaben3/a3aufgabe2/a3aufgabe2.component';
import { A3aufgabe1Component } from './Aufgaben3/a3aufgabe1/a3aufgabe1.component';
import { S3teil1Component } from './_Story3/s3teil1/s3teil1.component';
import { S3teil2Component } from './_Story3/s3teil2/s3teil2.component';
import { S3teil3Component } from './_Story3/s3teil3/s3teil3.component';
import { S3teil4Component } from './_Story3/s3teil4/s3teil4.component';
import { S3teil5Component } from './_Story3/s3teil5/s3teil5.component';
import { S3teil6Component } from './_Story3/s3teil6/s3teil6.component';
import { S3teil7Component } from './_Story3/s3teil7/s3teil7.component';
import { EndeComponent } from './ende/ende.component';

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
    path: 'a1aufgabe1',
    component: A1aufgabe1Component
  },
  {
    path: 'a1aufgabe2',
    component: A1aufgabe2Component
  },
  {
    path: 'a1aufgabe3',
    component: A1aufgabe3Component
  },
  {
    path: 'a1aufgabe4',
    component: A1aufgabe4Component
  },
  {
    path: 'a1aufgabe5',
    component: A1aufgabe5Component
  },
  {
    path: 'a2aufgabe1',
    component: A2aufgabe1Component
  },
  {
    path: 'a2aufgabe2',
    component: A2aufgabe2Component
  },
  {
    path: 'a2aufgabe3',
    component: A2aufgabe3Component
  },
  {
    path: 'a2aufgabe4',
    component: A2aufgabe4Component
  },
  {
    path: 'a2aufgabe5',
    component: A2aufgabe5Component
  },
  {
    path: 'a3aufgabe1',
    component: A3aufgabe1Component
  },
  {
    path: 'a3aufgabe2',
    component: A3aufgabe2Component
  },
  {
    path: 'a3aufgabe3',
    component: A3aufgabe3Component
  },
  {
    path: 'a3aufgabe4',
    component: A3aufgabe4Component
  },
  {
    path: 'a3aufgabe5',
    component: A3aufgabe5Component
  },
  {
    path: 's1teil1',
    component: S1teil1Component
  },
  {
    path: 's1teil2',
    component: S1teil2Component
  },
  {
    path: 's1teil3',
    component: S1teil3Component
  },
  {
    path: 's1teil4',
    component: S1teil4Component
  },
  {
    path: 's1teil5',
    component: S1teil5Component
  },
  {
    path: 's1teil6',
    component: S1teil6Component
  },
  {
    path: 's1teil7',
    component: S1teil7Component
  },
  {
    path: 's2teil1',
    component: S2teil1Component
  },
  {
    path: 's2teil2',
    component: S2teil2Component
  },
  {
    path: 's2teil3',
    component: S2teil3Component
  },
  {
    path: 's2teil4',
    component: S2teil4Component
  },
  {
    path: 's2teil5',
    component: S2teil5Component
  },
  {
    path: 's2teil6',
    component: S2teil6Component
  },
  {
    path: 's2teil7',
    component: S2teil7Component
  },
  {
    path: 's3teil1',
    component: S3teil1Component
  },
  {
    path: 's3teil2',
    component: S3teil2Component
  },
  {
    path: 's3teil3',
    component: S3teil3Component
  },
  {
    path: 's3teil4',
    component: S3teil4Component
  },
  {
    path: 's3teil5',
    component: S3teil5Component
  },
  {
    path: 's3teil6',
    component: S3teil6Component
  },
  {
    path: 's3teil7',
    component: S3teil7Component
  },
  {
    path: 'ende',
    component: EndeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
