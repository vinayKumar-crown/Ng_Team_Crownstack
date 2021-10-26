import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalModuleComponent } from './conditional-module.component';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { ConditionalLoadService } from '../shared/services/conditional-load.service';

function routesFactory(ccService: ConditionalLoadService) {
  return [
    {
      path: 'route',
      loadChildren: () => {
        return ccService.hasPermssion('NEW') ?
          import('../user-list-new/user-list-new.module').then(m => m.UserListNewModule) :
          import('../user-list-old/user-list-old.module').then(m => m.UserListOldModule);
      }
    },
    {
      path: 'component',
      component: ConditionalModuleComponent
    },
    {
      path: '',
      redirectTo: 'route'
    }
  ]
}

@NgModule({
  declarations: [
    ConditionalModuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: routesFactory,
      multi: true,
      deps: [ConditionalLoadService]
    }
  ]
})
export class ConditionalModuleModule { }
