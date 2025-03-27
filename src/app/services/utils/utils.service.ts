import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  toggleMenu() {
    const splitPane = document.querySelector('ion-split-pane');
    if (splitPane && (window.matchMedia('(min-width: 768px)').matches || splitPane.when)) {
      splitPane.classList.toggle('splitMaxWidth');
    }
  }
}
