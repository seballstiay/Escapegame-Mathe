import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-teil4',
  templateUrl: './teil4.component.html',
  styleUrls: ['./teil4.component.scss']
})
export class Teil4Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}
  back() {
    this.location.back();
  }
}
