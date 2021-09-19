import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCmUserComponent } from './dynamic-cm-user.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { GuestCardComponent } from './components/guest-card/guest-card.component';
import { ProfileService } from './service/profile.service';
import { DynamicHostDirective } from './directive/dynamic-host.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DynamicCmUserComponent
  }
]

@NgModule({
  declarations: [
    DynamicCmUserComponent,
    UserCardComponent,
    GuestCardComponent,
    DynamicHostDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProfileService
  ]
})
export class DynamicCmUserModule { }
