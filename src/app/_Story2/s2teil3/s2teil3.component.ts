import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s2teil3',
  templateUrl: './s2teil3.component.html',
  styleUrls: ['./s2teil3.component.scss']
})
export class S2teil3Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a2aufgabe4']);
  }
  back() {
    this.location.back();
  }
}
