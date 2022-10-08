import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s1teil6',
  templateUrl: './s1teil6.component.html',
  styleUrls: ['./s1teil6.component.scss']
})
export class S1teil6Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a1aufgabe6']);
  }
  back() {
    this.location.back();
  }
}
