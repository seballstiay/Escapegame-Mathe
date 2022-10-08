import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s1teil4',
  templateUrl: './s1teil4.component.html',
  styleUrls: ['./s1teil4.component.scss']
})
export class S1teil4Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a1aufgabe4']);
  }
  back() {
    this.location.back();
  }
}
