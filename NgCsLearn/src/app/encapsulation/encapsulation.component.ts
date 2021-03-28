import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom // change it to see the all results
})
export class EncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
