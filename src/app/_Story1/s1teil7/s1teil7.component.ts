import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s1teil7',
  templateUrl: './s1teil7.component.html',
  styleUrls: ['./s1teil7.component.scss']
})
export class S1teil7Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a1aufgabe7']);
  }
  back() {
    this.location.back();
  }
}
