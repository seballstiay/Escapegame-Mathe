import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-teil3',
  templateUrl: './teil3.component.html',
  styleUrls: ['./teil3.component.scss']
})
export class Teil3Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}
  back() {
    this.location.back();
  }
}
