import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tut-standalone-routing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tut-standalone-routing.component.html',
  styleUrls: ['./tut-standalone-routing.component.scss']
})
export class TutStandaloneRoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
