import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCmComponent } from './dynamic-cm.component';
import { DynamicHostDirective } from './directive/dynamic-host.directive';
import { RouterModule, Routes } from '@angular/router';
import { DynamicAdService } from './service/dynamic-ad.service';
import { JobAdComponent } from './components/job-ad/job-ad.component';
import { ProfileAdComponent } from './components/profile-ad/profile-ad.component';

const routes: Routes = [
  {
    path: 'ad',
    component: DynamicCmComponent
  },
  {
    path: 'user',
    loadChildren: () => import('../dynamic-cm-user/dynamic-cm-user.module').then(m => m.DynamicCmUserModule)
  },
  {
    path: '',
    redirectTo: 'ad'
  }
]

@NgModule({
  declarations: [
    DynamicCmComponent,
    DynamicHostDirective,
    ProfileAdComponent,
    JobAdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DynamicAdService
  ]
})
export class DynamicCmModule { }
