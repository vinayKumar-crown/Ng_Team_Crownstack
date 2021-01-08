import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GuidelinesComponent } from './guidelines/guidelines.component';

export const themeRoutes: Routes = [
  {
    path: '',
    component: ThemeComponent
  }
];

@NgModule({
  declarations: [ThemeComponent, GuidelinesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(themeRoutes),
    FormsModule
  ]
})
export class ThemeModule { }
