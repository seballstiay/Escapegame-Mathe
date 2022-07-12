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
      if (this.$a >= 3) {
        //Hinweis 1
        console.log('Hinweis 1');
        if (this.$a >= 4) {
          //Hinweis 2
          console.log('Hinweis 2');
          if (this.$a >= 5) {
            //Hinweis 3
            console.log('Hinweis 3');
          }
        }
      }
    }
  }
}
