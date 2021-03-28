import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'theme',
    loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule),
  },
  {
    path: 'shadowDom',
    loadChildren: () => import('./shadow-dom/shadow-dom.module').then(m => m.ShadowDomModule)
  },
  {
    path: 'encapsulation',
    loadChildren: () => import('./encapsulation/encapsulation.module').then(m => m.EncapsulationModule)
  },
  {
    path: '',
    redirectTo: 'theme',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
