import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TutStandaloneBasicComponent } from '../tut-standalone-basic/tut-standalone-basic.component';
import { TutStandaloneBootstrapComponent } from '../tut-standalone-bootstrap/tut-standalone-bootstrap.component';
import { TutStandaloneRoutingComponent } from '../tut-standalone-routing/tut-standalone-routing.component';

@Component({
  selector: 'app-tut-standalone',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tut-standalone.component.html',
  styleUrls: ['./tut-standalone.component.scss']
})
export class TutStandaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
