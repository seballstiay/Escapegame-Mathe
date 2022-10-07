import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-teil5',
  templateUrl: './teil5.component.html',
  styleUrls: ['./teil5.component.scss']
})
export class Teil5Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}
  back() {
    this.location.back();
  }
}
