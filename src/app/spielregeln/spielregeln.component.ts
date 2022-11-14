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
}
