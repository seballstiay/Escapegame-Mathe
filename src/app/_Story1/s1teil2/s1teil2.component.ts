import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s1teil2',
  templateUrl: './s1teil2.component.html',
  styleUrls: ['./s1teil2.component.scss']
})
export class S1teil2Component implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate(['/a1aufgabe2']);
  }
  back() {
    this.location.back();
  }
}
