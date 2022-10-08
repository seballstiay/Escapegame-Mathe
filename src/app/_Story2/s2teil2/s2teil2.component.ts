import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s2teil2',
  templateUrl: './s2teil2.component.html',
  styleUrls: ['./s2teil2.component.scss']
})
export class S2teil2Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a2aufgabe2']);
  }
  back() {
    this.location.back();
  }
}
