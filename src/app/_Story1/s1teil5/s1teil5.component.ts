import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s1teil5',
  templateUrl: './s1teil5.component.html',
  styleUrls: ['./s1teil5.component.scss']
})
export class S1teil5Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a1aufgabe5']);
  }
  back() {
    this.location.back();
  }
}
