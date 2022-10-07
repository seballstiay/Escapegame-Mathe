import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-teil7',
  templateUrl: './teil7.component.html',
  styleUrls: ['./teil7.component.scss']
})
export class Teil7Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}
  back() {
    this.location.back();
  }
}
