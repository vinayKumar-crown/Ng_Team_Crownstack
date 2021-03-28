import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowDomComponent } from './shadow-dom.component';
import { RouterModule, Routes } from '@angular/router';

const shadowRoutes: Routes = [
  {
    path: '',
    component: ShadowDomComponent
  }
];

@NgModule({
  declarations: [ShadowDomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shadowRoutes)
  ]
})
export class ShadowDomModule { }
