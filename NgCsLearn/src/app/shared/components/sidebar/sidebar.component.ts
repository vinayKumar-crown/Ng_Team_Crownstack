import { Component, OnInit } from '@angular/core';
import { sideBarNav } from './types/constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarNav = sideBarNav;

  constructor() { }

  ngOnInit(): void {
  }

}
