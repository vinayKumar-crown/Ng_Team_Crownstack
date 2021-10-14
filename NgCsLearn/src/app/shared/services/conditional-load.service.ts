import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConditionalLoadService {

  constructor() { }

  hasPermssion(type: string) {
    if (type === 'OLD') {
      return false;
    } else {
      return true;
    }
  }
  
}
