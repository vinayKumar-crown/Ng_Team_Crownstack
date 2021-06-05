import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { CustomElementComponent } from '../custom-element/custom-element.component';

@Injectable()
export class CustomElementService {

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent(message: string) {
    // Create element
    const popup = document.createElement('custom-element-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(CustomElementComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string) {
    // Create element
    const popupEl: NgElement & WithProperties<CustomElementComponent> = document.createElement('custom-element') as any;

    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    // Set the message
    popupEl.message = message;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}
