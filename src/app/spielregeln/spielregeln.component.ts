import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spielregeln',
  templateUrl: './spielregeln.component.html',
  styleUrls: ['./spielregeln.component.scss']
})
export class SpielregelnComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  story1() {
    localStorage.setItem('story1', 'true');
    this.router.navigate(['/woaucsdfjksd']);
  }

  story2() {
    localStorage.setItem('story2', 'true');
    this.router.navigate(['/storyteil1']);
  }

  story3() {
    localStorage.setItem('story3', 'true');
    this.router.navigate(['/woaucsdfjksd']);
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
