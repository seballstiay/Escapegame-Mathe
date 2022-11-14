import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'P-Seminar-Angular';

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        document.body.style.background = 'none';
      }
    });
  }

  //muss noch rausgemacht werden damit man nicht in die selben Storys gehen kann...
  ngOnInit() {
    localStorage.clear();
  }
  // für testen aber wichtig :)
}
