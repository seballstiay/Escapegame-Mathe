import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s2teil5',
  templateUrl: './s2teil5.component.html',
  styleUrls: ['./s2teil5.component.scss']
})
export class S2teil5Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a2aufgabe6']);
  }
  back() {
    this.location.back();
  }
}
