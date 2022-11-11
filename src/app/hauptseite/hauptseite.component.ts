import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-hauptseite',
  templateUrl: './hauptseite.component.html',
  styleUrls: ['./hauptseite.component.scss']
})
export class HauptseiteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
