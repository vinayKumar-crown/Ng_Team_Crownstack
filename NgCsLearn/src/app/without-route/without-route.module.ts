import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithoutRouteComponent } from './without-route.component';

@NgModule({
  declarations: [
    WithoutRouteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WithoutRouteModule { 
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<WithoutRouteComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(WithoutRouteComponent);
  }
}
