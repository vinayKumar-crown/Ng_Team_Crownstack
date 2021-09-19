import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CustomElementComponent } from './custom-element/custom-element.component';
import { CustomElementService } from './services/custom-element.service';

@Component({
  selector: 'app-web-component',
  templateUrl: './web-component.component.html',
  styleUrls: ['./web-component.component.scss']
})
export class WebComponentComponent implements OnInit {

  constructor(
    injector: Injector,
    public customElementService: CustomElementService
  ) {
    // Convert `CustomElementComponent` to a custom element.
    const PopupElement = createCustomElement(CustomElementComponent, { injector });
    // Register the custom element with the browser.
    if (!customElements.get('custom-element')) {
      customElements.define('custom-element', PopupElement);
    }
  }

  ngOnInit(): void {
  }

}
