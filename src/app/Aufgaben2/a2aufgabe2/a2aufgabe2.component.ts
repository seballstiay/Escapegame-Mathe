import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HinweisService } from 'src/app/hinweis.service';
@Component({
  selector: 'app-a2aufgabe2',
  templateUrl: './a2aufgabe2.component.html',
  styleUrls: ['./a2aufgabe2.component.scss']
})
export class A2aufgabe2Component implements OnInit {
  constructor(private router: Router, public hinweisService: HinweisService) {}

  $a = 0;
  inputWertSmall = '';
  inputWertMittel = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //Hier kommt das richtige Ergebnis der Aufgabe hin
  $antwortMittel = '3';
  $antwortSmall = '2';
  eingabe1falsch = false;
  eingabe2falsch = false;
  ngOnInit(): void {
    this.eingabe1falsch = false;
    this.eingabe2falsch = false;
  }

  pruefen() {
    if (
      this.inputWertSmall === this.$antwortSmall &&
      this.inputWertMittel === this.$antwortMittel
    ) {
      this.router.navigate(['/s2teil3']);
    } else {
      console.log('Dieses Ergebnis ist flasch');
      if (this.inputWertSmall !== this.$antwortSmall) {
        this.eingabe1falsch = true;
      }
      if (this.inputWertMittel !== this.$antwortMittel) {
        this.eingabe2falsch = true;
      }
      this.$a++;
      const a = this.$a - 3;

      if (a >= 0 && a <= 2) {
        this.toggleHinweis(a as 0 | 1 | 2);
      }
    }
  }

  toggleHinweis(h: 0 | 1 | 2) {
    this.hinweisService.hinweise.next(this.hinweisService.hinweise.value + 1);
    this.hinweise[h] = !this.hinweise[h];
  }

  getClasses(id: 0 | 1 | 2) {
    console.log('is called: ', this.hinweise[id]);
    return { show: this.hinweise[id] };
  }
}
