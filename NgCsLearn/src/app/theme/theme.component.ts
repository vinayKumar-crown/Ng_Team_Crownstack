import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  public openGuidelines = true;
  public variableCreation = true;
  public fromScratch = true;
  public fromCustomize = true;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

}
