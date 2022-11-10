import { Component, OnInit } from '@angular/core';
import { HinweisService } from 'src/app/hinweis.service';

@Component({
  selector: 'app-ende',
  templateUrl: './ende.component.html',
  styleUrls: ['./ende.component.scss']
})
export class EndeComponent implements OnInit {
  constructor(public hinweisService: HinweisService) {}

  ngOnInit(): void {}
}
