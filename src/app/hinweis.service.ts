import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HinweisService {
  hinweise = new BehaviorSubject(0);

  constructor() {
    const storage = localStorage.getItem('hinweise');
    if (storage) {
      this.hinweise.next(+storage ?? 0);
    }

    this.hinweise.subscribe((value) => {
      localStorage.setItem('hinweise', '' + value);
    });
  }

  reset() {
    localStorage.removeItem('hinweise');
  }
}
