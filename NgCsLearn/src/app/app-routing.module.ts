import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'theme',
    loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule),
  },
  {
    path: 'wc',
    loadChildren: () => import('./web-component/web-component.module').then(m => m.WebComponentModule)
  },
  {
    path: 'encapsulation',
    loadChildren: () => import('./encapsulation/encapsulation.module').then(m => m.EncapsulationModule)
  },
  {
    path: 'locale',
    loadChildren: () => import('./cs-locale/cs-locale.module').then(m => m.CsLocaleModule)
  },
  {
    path: 'dynamic',
    loadChildren: () => import('./dynamic-cm/dynamic-cm.module').then(m => m.DynamicCmModule)
  },
  {
    path: '',
    redirectTo: 'theme',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'theme'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
