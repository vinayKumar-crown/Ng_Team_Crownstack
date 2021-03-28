import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncapsulationComponent } from './encapsulation.component';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

const encapsuledRoutes: Routes = [
  {
    path: '',
    component: EncapsulationComponent
  }
];

@NgModule({
  declarations: [EncapsulationComponent, DemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(encapsuledRoutes)
  ]
})
export class EncapsulationModule { }
