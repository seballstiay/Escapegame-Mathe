import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s2teil6',
  templateUrl: './s2teil6.component.html',
  styleUrls: ['./s2teil6.component.scss']
})
export class S2teil6Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}
  back() {
    this.location.back();
  }
}
