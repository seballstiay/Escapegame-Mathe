import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'P-Seminar-Angular';

  //muss noch rausgemacht werden damit man nicht in die selben Storys gehen kann...
  ngOnInit() {
    localStorage.clear();
  }
  // für testen aber wichtig :)
}
