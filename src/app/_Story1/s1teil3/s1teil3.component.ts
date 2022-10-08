import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s1teil3',
  templateUrl: './s1teil3.component.html',
  styleUrls: ['./s1teil3.component.scss']
})
export class S1teil3Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a1aufgabe3']);
  }
  back() {
    this.location.back();
  }
}
