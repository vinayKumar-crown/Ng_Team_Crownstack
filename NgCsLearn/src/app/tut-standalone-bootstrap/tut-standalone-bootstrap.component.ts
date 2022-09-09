import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tut-standalone-bootstrap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tut-standalone-bootstrap.component.html',
  styleUrls: ['./tut-standalone-bootstrap.component.scss']
})
export class TutStandaloneBootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
