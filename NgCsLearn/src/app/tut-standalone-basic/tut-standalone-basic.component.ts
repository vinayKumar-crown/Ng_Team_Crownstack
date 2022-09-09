import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tut-standalone-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tut-standalone-basic.component.html',
  styleUrls: ['./tut-standalone-basic.component.scss']
})
export class TutStandaloneBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
