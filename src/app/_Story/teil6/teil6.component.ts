import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-teil6',
  templateUrl: './teil6.component.html',
  styleUrls: ['./teil6.component.scss']
})
export class Teil6Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}
  back() {
    this.location.back();
  }
}
