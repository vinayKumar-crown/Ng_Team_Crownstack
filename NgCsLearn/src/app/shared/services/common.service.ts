import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  changeTheme() {
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.id = 'theme';
    style.rel = 'stylesheet';
    style.href = 'light.css';
    head.appendChild(style);
  }
}
