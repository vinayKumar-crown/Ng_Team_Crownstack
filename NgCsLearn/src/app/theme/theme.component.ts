import { Component, ElementRef, OnInit } from '@angular/core';

const LIGHT_THEME_PROPS = {
  '--body-color': '#e0e5ec',
  '--border-color': '#282c34',
  '--text-color': '#282c34',
  '--link-color': '#21252b',
  '--table-strip-color': 'rgba(38,40,51,.05)',
  '--table-hover-color': 'rgba(38,40,51,.03)'
};

const DARK_THEME_PROPS = {
  '--body-color': '#282c34',
  '--border-color': '#e0e5ec',
  '--text-color': '#e0e5ec',
  '--link-color': '#ffffff',
  '--table-strip-color': '#171a1c',
  '--table-hover-color': '#394047'
};

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  public selectedTheme = 'light';
  public openGuidelines = true;
  public variableCreation = true;
  public fromScratch = true;
  public fromCustomize = true;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  changingTheme() {
    if (this.selectedTheme === 'light') {
      this.makeLightTheme();
    } else {
      this.makeDarkTheme();
    }
  }

  makeLightTheme() {
    const modeProperties: any = LIGHT_THEME_PROPS;
    for (let key in modeProperties) {
      if (modeProperties.hasOwnProperty(key)) {
        this.elementRef.nativeElement.style.setProperty(key, modeProperties[key]);
      }
    }
  }

  makeDarkTheme() {
    const modeProperties: any = DARK_THEME_PROPS;
    for (let key in modeProperties) {
      if (modeProperties.hasOwnProperty(key)) {
        this.elementRef.nativeElement.style.setProperty(key, modeProperties[key]);
      }
    }
  }

}
