import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListOldComponent } from './user-list-old.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserListOldComponent
  }
];

@NgModule({
  declarations: [
    UserListOldComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserListOldModule {}
