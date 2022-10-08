import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s1teil1',
  templateUrl: './s1teil1.component.html',
  styleUrls: ['./s1teil1.component.scss']
})
export class S1teil1Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a1aufgabe1']);
  }
  back() {
    this.location.back();
  }
}
