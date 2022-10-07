import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation-aufgaben',
  templateUrl: './navigation-aufgaben.component.html',
  styleUrls: ['./navigation-aufgaben.component.scss']
})
export class NavigationAufgabenComponent implements OnInit {
  @Input()
  showNextButton = true;

  @Input()
  link = '';

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  weiter() {
    this.router.navigate([this.link]);
  }

  back() {
    this.location.back();
  }
}
