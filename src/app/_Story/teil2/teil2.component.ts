import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teil2',
  templateUrl: './teil2.component.html',
  styleUrls: ['./teil2.component.scss']
})
export class Teil2Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/aufgabe2']);
  }
  back() {
    this.location.back();
  }
}
