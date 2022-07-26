import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aufgabe3',
  templateUrl: './aufgabe3.component.html',
  styleUrls: ['./aufgabe3.component.scss']
})
export class Aufgabe3Component implements OnInit {
  constructor() {}
  $antwort = 1;

  ngOnInit(): void {}

  pruefen() {
    const options = document.getElementsByName(
      'i'
    ) as NodeListOf<HTMLInputElement>;

    if (options[1].checked) {
      //redirecten
      alert('Richtige Antwort');
    } else {
      alert('Falsche Antwort');
    }
  }
}
