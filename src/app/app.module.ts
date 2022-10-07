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
import { Teil3Component } from './_Story/teil3/teil3.component';
import { Teil4Component } from './_Story/teil4/teil4.component';
import { Teil5Component } from './_Story/teil5/teil5.component';
import { Teil6Component } from './_Story/teil6/teil6.component';
import { Teil7Component } from './_Story/teil7/teil7.component';
import { Aufgabe5Component } from './Aufgaben/aufgabe5/aufgabe5.component';
import { Aufgabe6Component } from './Aufgaben/aufgabe6/aufgabe6.component';
import { Aufgabe7Component } from './Aufgaben/aufgabe7/aufgabe7.component';

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
    Aufgabe4Component,
    Teil3Component,
    Teil4Component,
    Teil5Component,
    Teil6Component,
    Teil7Component,
    Aufgabe5Component,
    Aufgabe6Component,
    Aufgabe7Component
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
