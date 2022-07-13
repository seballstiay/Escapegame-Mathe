import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aufgabe1',
  templateUrl: './aufgabe1.component.html',
  styleUrls: ['./aufgabe1.component.scss']
})
export class Aufgabe1Component implements OnInit {
  constructor(private router: Router) {}

  $a = 0;
  inputWert = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //Hier kommt das richtige Ergebnis der Aufgabe hin
  $Antwort = 'a';

  ngOnInit(): void {}

  pruefen() {
    if (this.inputWert === this.$Antwort) {
      this.router.navigate(['/aufgabe2']);
    } else {
      console.log('Dieses Ergebnis ist flasch');
      this.$a++;
      console.log(this.$a);
      const a = this.$a - 3;

      if (a >= 0 && a <= 2) {
        this.toggleHinweis(a as 0 | 1 | 2);
      }
    }
  }

  toggleHinweis(h: 0 | 1 | 2) {
    this.hinweise[h] = !this.hinweise[h];
  }
}
