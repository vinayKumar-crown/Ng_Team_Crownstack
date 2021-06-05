import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { takeWhile, switchMap, tap, debounceTime, delay } from 'rxjs/operators';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit, OnDestroy {

  private example_2: Array<any> = [
    {
      name: 'Test',
      email: 'test@yopmail.com'
    },
    {
      name: 'Test 1',
      email: 'test1@yopmail.com'
    },
    {
      name: 'Test2',
      email: 'test2@yopmail.com'
    }
  ];

  public example_2_view: Array<any> = [];
  private alive = true;
  private _loading$ = new BehaviorSubject<boolean>(true);
  loading$ = this._loading$.asObservable();

  constructor() { 
    this.subscribeExample_2();
  }

  ngOnInit(): void {
  }

  subscribeExample_2() {
    timer(5000, 5000)
    .pipe(
        takeWhile(_ => this.alive),
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._getExampleData_2()),
        delay(200),
        tap(() => this._loading$.next(false))
    ).subscribe(result => {
       this.example_2_view = result;
    }, (err) => {
        // console.log(err);
    });
  }

  _getExampleData_2(): Observable<any> {
    return of(this.example_2); 
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
