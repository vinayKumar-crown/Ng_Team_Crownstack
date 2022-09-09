import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptService implements HttpInterceptor {

  constructor(
    private http: HttpClient
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    // get timestamp
    const startTimestamp = new Date().getTime();

    const newReq = req.clone({
      headers: req.headers.set('startTimestamp', startTimestamp.toString())
    });
    console.log(newReq);
    return next.handle(newReq).pipe(
      tap((res: HttpEvent<any>) => {
        console.log(res);
        // another timestamp
        // const endTimestamp: number = new Date().getTime();
        // const startTimestamp2: number = Number(
        //   res.headers.get('startTimestamp')
        // );
        // get the difference
        // const responseTimes = endTimestamp - startTimestamp2;
        // console.log(startTimestamp2, endTimestamp, responseTimes);
        // send the data to the server
      })
    );
  }
}
