import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { HinweisService } from 'src/app/hinweis.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-ende',
  templateUrl: './ende.component.html',
  styleUrls: ['./ende.component.scss']
})
export class EndeComponent implements OnInit, AfterViewInit {
  constructor(public hinweisService: HinweisService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    document.body.style.removeProperty('background');
  }

  home() {
    this.router.navigate(['']);
  }
}
