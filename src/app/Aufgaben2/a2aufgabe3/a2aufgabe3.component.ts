import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-a2aufgabe3',
  templateUrl: './a2aufgabe3.component.html',
  styleUrls: ['./a2aufgabe3.component.scss']
})
export class A2aufgabe3Component implements OnInit {
  constructor(private router: Router) {}

  $a = 0;
  inputWert = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //Hier kommt das richtige Ergebnis der Aufgabe hin
  $antwort = '105';
  $antwort2 = '105cm';
  $antwort3 = '105 cm';

  ngOnInit(): void {}

  pruefen() {
    if (
      this.inputWert === this.$antwort ||
      this.inputWert === this.$antwort2 ||
      this.inputWert === this.$antwort3
    ) {
      this.router.navigate(['/s2teil4']);
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

    /**
 * $a = 0;
  inputWert = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //hier kommt das richtige Ergebnis hin
  $antwort = 1;

  ngOnInit(): void {}

  pruefen() {
    const options = document.getElementsByName(
      'i'
    ) as NodeListOf<HTMLInputElement>;

    if (options[1].checked) {
      this.router.navigate(['/s2teil4']);
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
 */
  }
}
