import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GuidelinesComponent implements OnInit {

  public controlOne = '';

  constructor() { }

  ngOnInit(): void {
  }

}
