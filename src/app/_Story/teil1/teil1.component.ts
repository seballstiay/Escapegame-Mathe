import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teil1',
  templateUrl: './teil1.component.html',
  styleUrls: ['./teil1.component.scss']
})
export class Teil1Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/aufgabe1']);
  }
  back() {
    this.location.back();
  }
}
