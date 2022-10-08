import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s2teil4',
  templateUrl: './s2teil4.component.html',
  styleUrls: ['./s2teil4.component.scss']
})
export class S2teil4Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a2aufgabe5']);
  }
  back() {
    this.location.back();
  }
}
