import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HinweisService } from 'src/app/hinweis.service';
@Component({
  selector: 'app-a2aufgabe4',
  templateUrl: './a2aufgabe4.component.html',
  styleUrls: ['./a2aufgabe4.component.scss']
})
export class A2aufgabe4Component implements OnInit {
  constructor(private router: Router, public hinweisService: HinweisService) {}

  $a = 0;
  $b = 0;
  images = [
    '\\assets\\images\\QR\\QR1.PNG',
    '\\assets\\images\\QR\\QR2.PNG',
    '\\assets\\images\\QR\\QR3.PNG',
    '\\assets\\images\\QR\\QR4.PNG',
    '\\assets\\images\\QR\\QR5.PNG',
    '\\assets\\images\\QR\\QR6.PNG'
  ];
  indexI = 0;
  image = this.images[this.indexI];

  inputWert1 = '';
  inputWert2 = '';
  inputWert3 = '';
  inputWert4 = '';
  inputWert5 = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //Hier kommt das richtige Ergebnis der Aufgabe hin
  $antwort1 = '7';
  $antwort2 = '4';
  $antwort3 = '5';
  $antwort4 = '1';
  $antwort5 = '9';

  antwort1falsch = false;
  antwort2falsch = false;
  antwort3falsch = false;
  antwort4falsch = false;
  antwort5falsch = false;

  ngOnInit(): void {
    this.antwort1falsch = false;
    this.antwort2falsch = false;
    this.antwort3falsch = false;
    this.antwort4falsch = false;
    this.antwort5falsch = false;
  }

  bildW() {
    this.indexI = 0;

    if (this.inputWert1 === this.$antwort1) {
      this.indexI = this.indexI + 1;
    }
    if (this.inputWert2 === this.$antwort2) {
      this.indexI = this.indexI + 1;
    }
    if (this.inputWert3 === this.$antwort3) {
      this.indexI = this.indexI + 1;
    }
    if (this.inputWert4 === this.$antwort4) {
      this.indexI = this.indexI + 1;
    }
    if (this.inputWert5 === this.$antwort5) {
      this.indexI = this.indexI + 1;
    }
    this.image = this.images[this.indexI];
  }

  bilder(): string {
    return this.image;
  }

  pruefen() {
    if (
      this.inputWert1 === this.$antwort1 &&
      this.inputWert2 === this.$antwort2 &&
      this.inputWert3 === this.$antwort3 &&
      this.inputWert4 === this.$antwort4 &&
      this.inputWert5 === this.$antwort5
    ) {
      this.router.navigate(['/s2teil5']);
    } else {
      console.log('Dieses Ergebnis ist flasch');
      this.antwort1falsch = false;
      this.antwort2falsch = false;
      this.antwort3falsch = false;
      this.antwort4falsch = false;
      this.antwort5falsch = false;

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
      if (this.inputWert5 !== this.$antwort5) {
        this.antwort5falsch = true;
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
