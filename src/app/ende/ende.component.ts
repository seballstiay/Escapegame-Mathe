import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HinweisService } from 'src/app/hinweis.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-ende',
  templateUrl: './ende.component.html',
  styleUrls: ['./ende.component.scss'], 
})
export class EndeComponent implements OnInit {
  constructor(public hinweisService: HinweisService) {}

  ngOnInit(): void {}
}
