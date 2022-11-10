import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-a2aufgabe7',
  templateUrl: './a2aufgabe7.component.html',
  styleUrls: ['./a2aufgabe7.component.scss']
})
export class A2aufgabe7Component implements OnInit {
  constructor(private router: Router) {}

  $a = 0;
  $b = 0;
  images = ["\assets\images\QRCodeDef.png", "\assets\images\QRCodeA1.png", "\assets\images\QRCodeA2.png",
             "\assets\images\QRCodeA3.png", "\assets\images\QRCodeA4.png", "\assets\images\QRCodeA5.png",];
  image = this.images[0];
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

  ngOnInit(): void {}
  bildW() {
    if(this.inputWert1 === this.$antwort1){
        this.image = this.images[1];
    }
    if(this.inputWert1 === this.$antwort1 &&
      this.inputWert2 === this.$antwort2 ){
      this.image = this.images[2];
    }
    if(this.inputWert1 === this.$antwort1 &&
      this.inputWert2 === this.$antwort2 &&
      this.inputWert3 === this.$antwort3 ){
      this.image = this.images[3];
    }
    if(this.inputWert1 === this.$antwort1 &&
      this.inputWert2 === this.$antwort2 &&
      this.inputWert3 === this.$antwort3 &&
      this.inputWert4 === this.$antwort4 ){
      this.image = this.images[4];
    }
    if(this.inputWert1 === this.$antwort1 &&
      this.inputWert2 === this.$antwort2 &&
      this.inputWert3 === this.$antwort3 &&
      this.inputWert4 === this.$antwort4 &&
      this.inputWert5 === this.$antwort5 ){
      this.image = this.images[5];
    }

  }

  pruefen() {
    if (this.inputWert1 === this.$antwort1 &&
        this.inputWert2 === this.$antwort2 &&
        this.inputWert3 === this.$antwort3 &&
        this.inputWert4 === this.$antwort4 &&
        this.inputWert5 === this.$antwort5) {
      this.router.navigate(['/a2aufgabe5']);
    } else {
      console.log('Dieses Ergebnis ist flasch');
      this.$a++;
      const a = this.$a - 3;

      if (a >= 0 && a <= 2) {
        this.toggleHinweis(a as 0 | 1 | 2);
      }
    }
  }

  toggleHinweis(h: 0 | 1 | 2) {
    this.hinweise[h] = !this.hinweise[h];
  }

  getClasses(id: 0 | 1 | 2) {
    console.log('is called: ', this.hinweise[id]);
    return { show: this.hinweise[id] };
  }
}
