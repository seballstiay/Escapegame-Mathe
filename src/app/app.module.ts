import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HauptseiteComponent } from './hauptseite/hauptseite.component';
import { SpielBeitretenComponent } from './spiel-beitreten/spiel-beitreten.component';
import { SpielregelnComponent } from './spielregeln/spielregeln.component';
import { LehrerPanelComponent } from './lehrer-panel/lehrer-panel.component';
import { EinfuehrunglehrerComponent } from './einfuehrunglehrer/einfuehrunglehrer.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Aufgabe1Component } from './Aufgaben/aufgabe1/aufgabe1.component';
import { Aufgabe2Component } from './Aufgaben/aufgabe2/aufgabe2.component';
import { Aufgabe3Component } from './Aufgaben/aufgabe3/aufgabe3.component';
import { Teil1Component } from './_Story/teil1/teil1.component';
import { Teil2Component } from './_Story/teil2/teil2.component';
import { NavigationAufgabenComponent } from './navigation-aufgaben/navigation-aufgaben.component';
import { Aufgabe4Component } from './Aufgaben/aufgabe4/aufgabe4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HauptseiteComponent,
    SpielBeitretenComponent,
    SpielregelnComponent,
    LehrerPanelComponent,
    EinfuehrunglehrerComponent,
    FooterComponent,
    Aufgabe1Component,
    Aufgabe2Component,
    Aufgabe3Component,
    Teil1Component,
    Teil2Component,
    NavigationAufgabenComponent,
    Aufgabe4Component
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
