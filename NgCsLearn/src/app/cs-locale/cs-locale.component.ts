import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-locale',
  templateUrl: './cs-locale.component.html',
  styleUrls: ['./cs-locale.component.scss']
})
export class CsLocaleComponent implements OnInit {

  public minutes = 0;
  public gender = 'male';
  public today = new Date();
  public number = 100000;

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.minutes += 1;
  }

  decrease() {
    if (this.minutes < 0) {
      return;
    }
    this.minutes -= 1;
  }

}
