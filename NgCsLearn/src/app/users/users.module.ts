import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ConditionalLoadService } from '../shared/services/conditional-load.service';
import { RouterModule, ROUTES } from '@angular/router';

function routesFactory(ccService: ConditionalLoadService) {
  return [
    {
      path: '',
      loadChildren: () => {
        return ccService.hasPermssion('OLD') ?
          import('../user-list-new/user-list-new.module').then(m => m.UserListNewModule) :
          import('../user-list-old/user-list-old.module').then(m => m.UserListOldModule);
      }
    }]
}

@NgModule({
  declarations: [
    UsersComponent
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
export class UsersModule { }
