import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-a2aufgabe4',
  templateUrl: './a2aufgabe4.component.html',
  styleUrls: ['./a2aufgabe4.component.scss']
})
export class A2aufgabe4Component implements OnInit {
  constructor(private router: Router) {}

  $a = 0;
  inputWert = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //hier kommt das richtige Ergebnis hin

  option1 = false;
  option2 = false;
  option3 = false;
  option4 = false;
  option5 = false;
  option6 = false;
  option7 = false;
  option8 = false;
  option9 = false;
  option10 = false;
  option11 = false;
  option12 = false;

  $antwort1 = true;
  $antwort2 = false;
  $antwort3 = false;
  $antwort4 = true;
  $antwort5 = true;
  $antwort6 = false;
  $antwort7 = true;
  $antwort8 = false;
  $antwort9 = true;
  $antwort10 = false;
  $antwort11 = false;
  $antwort12 = false;

  ngOnInit(): void {}

  pruefen() {
    if (
      this.option1 === this.$antwort1 &&
      this.option2 === this.$antwort2 &&
      this.option3 === this.$antwort3 &&
      this.option4 === this.$antwort4 &&
      this.option5 === this.$antwort5 &&
      this.option6 === this.$antwort6 &&
      this.option7 === this.$antwort7 &&
      this.option8 === this.$antwort8 &&
      this.option9 === this.$antwort9 &&
      this.option10 === this.$antwort10 &&
      this.option11 === this.$antwort11 &&
      this.option12 === this.$antwort12
    ) {
      this.router.navigate(['/s2teil5']);
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
