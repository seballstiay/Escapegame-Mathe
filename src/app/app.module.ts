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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HauptseiteComponent,
    SpielBeitretenComponent,
    SpielregelnComponent,
    LehrerPanelComponent,
    EinfuehrunglehrerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
