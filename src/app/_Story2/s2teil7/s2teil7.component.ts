import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s2teil7',
  templateUrl: './s2teil7.component.html',
  styleUrls: ['./s2teil7.component.scss']
})
export class S2teil7Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/spiel-beitreten']);
  }
  back() {
    this.location.back();
  }
}
