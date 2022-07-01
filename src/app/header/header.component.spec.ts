import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  menuOpen = false;

  togglemenu() {
    this.menuOpen = !this.menuOpen;
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
