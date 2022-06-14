import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  togglemenu() {
    if (!this.menuOpen) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
  }
}
/*
const menubtn= document.querySelector('.menu-button');
let menuOpen = false;
menubtn.addEventListener('click', () => {
    if (!menuOpen){
        menubtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menubtn.classList.remove('open');
        menuOpen = false;
    }
});
*/
