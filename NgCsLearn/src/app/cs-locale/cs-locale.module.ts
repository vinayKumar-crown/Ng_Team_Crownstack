import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsLocaleComponent } from './cs-locale.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const csLocalRoutes: Routes = [
  {
    path: '',
    component: CsLocaleComponent
  }
]

@NgModule({
  declarations: [
    CsLocaleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(csLocalRoutes),
    FormsModule
  ]
})
export class CsLocaleModule { }
