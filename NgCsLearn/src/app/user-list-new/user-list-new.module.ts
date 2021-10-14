import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListNewComponent } from './user-list-new.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserListNewComponent
  }
];

@NgModule({
  declarations: [
    UserListNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserListNewModule { }
