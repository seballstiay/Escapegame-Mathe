import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HinweisService } from 'src/app/hinweis.service';
@Component({
  selector: 'app-a1aufgabe1',
  templateUrl: './a1aufgabe1.component.html',
  styleUrls: ['./a1aufgabe1.component.scss']
})
export class A1aufgabe1Component implements OnInit {
  constructor(private router: Router, public hinweisService: HinweisService) {}

  $a = 0;
  inputWert = '';
  hinweise = {
    0: false,
    1: false,
    2: false
  };
  //Hier kommt das richtige Ergebnis der Aufgabe hin
  $antwort = '2';

  eingabefalsch = false;

  ngOnInit(): void {
    this.eingabefalsch = false;
  }

  pruefen() {
    if (
      this.inputWert.toLowerCase().replace(' ', '').replace('g', '') ===
      this.$antwort
    ) {
      this.router.navigate(['/s1teil2']);
    } else {
      console.log('Dieses Ergebnis ist falsch');
      this.eingabefalsch = true;
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
