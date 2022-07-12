import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aufgabe2',
  templateUrl: './aufgabe2.component.html',
  styleUrls: ['./aufgabe2.component.scss']
})
export class Aufgabe2Component implements OnInit {
  constructor(private router: Router) {}
  $a = 0;
  inputWert = '';
  //Hier kommt das richtige Ergebnis der Aufgabe hin
  $Antwort = 'a';

  ngOnInit(): void {}

  pruefen() {
    if (this.inputWert === this.$Antwort) {
      this.router.navigate(['/aufgabe1']);
    } else {
      console.log('Dieses Ergebnis ist flasch');
      this.$a++;
      console.log(this.$a);
      if (this.$a === 3) {
        //Hinweis 1
      }
    }
  }
}
