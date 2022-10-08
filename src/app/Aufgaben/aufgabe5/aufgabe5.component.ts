import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-aufgabe5',
  templateUrl: './aufgabe5.component.html',
  styleUrls: ['./aufgabe5.component.scss']
})
export class Aufgabe5Component implements OnInit {
  constructor(private router: Router) {}

  $a = 0;
  inputWert = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //Hier kommt das richtige Ergebnis der Aufgabe hin
  $antwort = '2g';

  ngOnInit(): void {}

  pruefen() {
    if (this.inputWert === this.$antwort) {
      this.router.navigate(['/2storyteil6']);
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
