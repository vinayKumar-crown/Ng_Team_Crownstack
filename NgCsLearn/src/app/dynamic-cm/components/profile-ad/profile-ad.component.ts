import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-ad',
  templateUrl: './profile-ad.component.html',
  styleUrls: ['./profile-ad.component.scss']
})
export class ProfileAdComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
