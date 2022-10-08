import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s2teil1',
  templateUrl: './s2teil1.component.html',
  styleUrls: ['./s2teil1.component.scss']
})
export class S2teil1Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a2aufgabe1']);
  }
  back() {
    this.location.back();
  }
}
