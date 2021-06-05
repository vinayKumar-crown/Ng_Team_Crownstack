import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomElementComponent } from './custom-element/custom-element.component';
import { TemplatesComponent } from './templates/templates.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { Routes, RouterModule } from '@angular/router';
import { WebComponentComponent } from './web-component.component';
import { CustomElementService } from './services/custom-element.service';

const routes: Routes = [
  {
    path: '',
    component: WebComponentComponent
  }
];

@NgModule({
  declarations: [
    ShadowDomComponent,
    CustomElementComponent,
    TemplatesComponent,
    WebComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CustomElementService
  ]
})
export class WebComponentModule { }
