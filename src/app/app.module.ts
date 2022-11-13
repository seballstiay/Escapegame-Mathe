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
import { NavigationAufgabenComponent } from './navigation-aufgaben/navigation-aufgaben.component';
import { Aufgabe1Component } from './Aufgaben/aufgabe1/aufgabe1.component';
import { Aufgabe2Component } from './Aufgaben/aufgabe2/aufgabe2.component';
import { Aufgabe3Component } from './Aufgaben/aufgabe3/aufgabe3.component';
import { Aufgabe4Component } from './Aufgaben/aufgabe4/aufgabe4.component';
import { Aufgabe5Component } from './Aufgaben/aufgabe5/aufgabe5.component';
import { Aufgabe6Component } from './Aufgaben/aufgabe6/aufgabe6.component';
import { Aufgabe7Component } from './Aufgaben/aufgabe7/aufgabe7.component';
import { A1aufgabe1Component } from './Aufgaben1/a1aufgabe1/a1aufgabe1.component';
import { A1aufgabe2Component } from './Aufgaben1/a1aufgabe2/a1aufgabe2.component';
import { A1aufgabe3Component } from './Aufgaben1/a1aufgabe3/a1aufgabe3.component';
import { A1aufgabe4Component } from './Aufgaben1/a1aufgabe4/a1aufgabe4.component';
import { A1aufgabe5Component } from './Aufgaben1/a1aufgabe5/a1aufgabe5.component';
import { A2aufgabe1Component } from './Aufgaben2/a2aufgabe1/a2aufgabe1.component';
import { A2aufgabe2Component } from './Aufgaben2/a2aufgabe2/a2aufgabe2.component';
import { A2aufgabe3Component } from './Aufgaben2/a2aufgabe3/a2aufgabe3.component';
import { A2aufgabe4Component } from './Aufgaben2/a2aufgabe4/a2aufgabe4.component';
import { A2aufgabe5Component } from './Aufgaben2/a2aufgabe5/a2aufgabe5.component';
import { A3aufgabe1Component } from './Aufgaben3/a3aufgabe1/a3aufgabe1.component';
import { A3aufgabe2Component } from './Aufgaben3/a3aufgabe2/a3aufgabe2.component';
import { A3aufgabe3Component } from './Aufgaben3/a3aufgabe3/a3aufgabe3.component';
import { A3aufgabe4Component } from './Aufgaben3/a3aufgabe4/a3aufgabe4.component';
import { A3aufgabe5Component } from './Aufgaben3/a3aufgabe5/a3aufgabe5.component';
import { Teil1Component } from './_Story/teil1/teil1.component';
import { Teil2Component } from './_Story/teil2/teil2.component';
import { Teil3Component } from './_Story/teil3/teil3.component';
import { Teil4Component } from './_Story/teil4/teil4.component';
import { Teil5Component } from './_Story/teil5/teil5.component';
import { Teil6Component } from './_Story/teil6/teil6.component';
import { Teil7Component } from './_Story/teil7/teil7.component';
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
import { S3teil1Component } from './_Story3/s3teil1/s3teil1.component';
import { S3teil2Component } from './_Story3/s3teil2/s3teil2.component';
import { S3teil3Component } from './_Story3/s3teil3/s3teil3.component';
import { S3teil4Component } from './_Story3/s3teil4/s3teil4.component';
import { S3teil5Component } from './_Story3/s3teil5/s3teil5.component';
import { S3teil6Component } from './_Story3/s3teil6/s3teil6.component';
import { S3teil7Component } from './_Story3/s3teil7/s3teil7.component';
import { NavigationStoryComponent } from './navigation-story/navigation-story.component';
import { HinweisService } from './hinweis.service';
import { EndeComponent } from './ende/ende.component';

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
    Aufgabe7Component,
    S1teil1Component,
    S1teil2Component,
    S1teil3Component,
    S1teil4Component,
    S1teil5Component,
    S1teil6Component,
    S1teil7Component,
    S2teil1Component,
    S2teil2Component,
    S2teil3Component,
    S2teil4Component,
    S2teil5Component,
    S2teil6Component,
    S2teil7Component,
    A1aufgabe1Component,
    A1aufgabe2Component,
    A1aufgabe3Component,
    A1aufgabe4Component,
    A1aufgabe5Component,
    A2aufgabe1Component,
    A2aufgabe2Component,
    A2aufgabe3Component,
    A2aufgabe4Component,
    A2aufgabe5Component,
    A3aufgabe1Component,
    A3aufgabe2Component,
    A3aufgabe3Component,
    A3aufgabe4Component,
    A3aufgabe5Component,
    S3teil1Component,
    S3teil2Component,
    S3teil3Component,
    S3teil4Component,
    S3teil5Component,
    S3teil6Component,
    S3teil7Component,
    NavigationStoryComponent,
    EndeComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [HinweisService],
  bootstrap: [AppComponent]
})
export class AppModule {}
