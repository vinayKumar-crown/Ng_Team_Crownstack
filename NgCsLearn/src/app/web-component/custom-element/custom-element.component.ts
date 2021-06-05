import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.scss'],
  animations: [
    trigger('state', [
      state('opened', style({ transform: 'translateY(0%)' })),
      state('void, closed', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition('* => *', animate('100ms ease-in')),
    ])
  ]
})
export class CustomElementComponent {

  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get message(): string { return this._message; }
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  private _message = '';

  @Output()
  closed = new EventEmitter();

}
