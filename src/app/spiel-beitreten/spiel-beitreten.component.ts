import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spiel-beitreten',
  templateUrl: './spiel-beitreten.component.html',
  styleUrls: ['./spiel-beitreten.component.scss']
})
export class SpielBeitretenComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  story1() {
    localStorage.setItem('story1', 'true');
    this.router.navigate(['/12storyteil1']);
  }

  story2() {
    localStorage.setItem('story2', 'true');
    this.router.navigate(['/2storyteil1']);
  }

  story3() {
    localStorage.setItem('story3', 'true');
    this.router.navigate(['/32storyteil1']);
  }

  story1Aktiviert() {
    return localStorage.getItem('story1') !== 'true';
  }

  story2Aktiviert() {
    return localStorage.getItem('story2') !== 'true';
  }

  story3Aktiviert() {
    return localStorage.getItem('story3') !== 'true';
  }
}
