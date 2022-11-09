import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation-story',
  templateUrl: './navigation-story.component.html',
  styleUrls: ['./navigation-story.component.scss']
})
export class NavigationStoryComponent implements OnInit {
  @Input()
  showNextButton = true;
  @Input()
  showBackButton = true;

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
