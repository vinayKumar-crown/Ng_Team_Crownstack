import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedTheme = 'light';

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }

  changingTheme() {
    let themeLink = this.document.getElementById(
      'theme'
    ) as HTMLLinkElement;
    themeLink.href = `${this.selectedTheme}.css`;
  }

}
