import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HinweisService } from 'src/app/hinweis.service';
@Component({
  selector: 'app-a2aufgabe5',
  templateUrl: './a2aufgabe5.component.html',
  styleUrls: ['./a2aufgabe5.component.scss']
})
export class A2aufgabe5Component implements OnInit {
  constructor(private router: Router, public hinweisService: HinweisService) {}

  $a = 0;
  inputWert1 = '';
  inputWert2 = '';
  inputWert3 = '';
  inputWert4 = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //Hier kommt das richtige Ergebnis der Aufgabe hin
  $antwort1 = '19';
  $antwort2 = '8';
  $antwort3 = '3';
  $antwort4 = '15';

  antwort1falsch = false;
  antwort2falsch = false;
  antwort3falsch = false;
  antwort4falsch = false;
  ngOnInit(): void {
    this.antwort1falsch = false;
    this.antwort2falsch = false;
    this.antwort3falsch = false;
    this.antwort4falsch = false;
  }

  pruefen() {
    if (
      this.inputWert1 === this.$antwort1 &&
      this.inputWert2 === this.$antwort2 &&
      this.inputWert3 === this.$antwort3 &&
      this.inputWert4 === this.$antwort4
    ) {
      this.router.navigate(['/s2teil6']);
    } else {
      this.antwort1falsch = false;
      this.antwort2falsch = false;
      this.antwort3falsch = false;
      this.antwort4falsch = false;
      console.log('Dieses Ergebnis ist flasch');
      if (this.inputWert1 !== this.$antwort1) {
        this.antwort1falsch = true;
      }
      if (this.inputWert2 !== this.$antwort2) {
        this.antwort2falsch = true;
      }
      if (this.inputWert3 !== this.$antwort3) {
        this.antwort3falsch = true;
      }
      if (this.inputWert4 !== this.$antwort4) {
        this.antwort4falsch = true;
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
