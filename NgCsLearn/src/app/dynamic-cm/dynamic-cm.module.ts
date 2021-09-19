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
    path: '',
    component: DynamicCmComponent
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
