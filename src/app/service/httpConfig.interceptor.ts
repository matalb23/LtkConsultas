//httpConfig.interceptor.ts
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { map, catchError } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  import { LoadingController,ToastController  } from '@ionic/angular';
  
  @Injectable()
  export class HttpConfigInterceptor implements HttpInterceptor {
    isLoading: boolean = false;
    constructor(public loadingCtrl: LoadingController,
      private toastCtrl: ToastController,) { }
  
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
     /* const token = "my-token-string-from-server";
  
      //Authentication by setting header with token value
      if (token) {
        request = request.clone({
          setHeaders: {
            'Authorization': token
          }
        });
      }
  
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          setHeaders: {
            'content-type': 'application/json'
          }
        });
      }
  
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json')
      });
  
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        }));*/
       // intercept(req: HttpRequest<any>, next: HttpHandler) {
        
      //  request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', 'Content-Type') }); //application/json
         //request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') }); //application/json
         this.presentLoading();
         request = request.clone({ headers: request.headers.set('Content-Type', 'application/json,application/x-www-form-urlencoded header') }); //application/json
         
        // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS') });
         request = request.clone({ headers: request.headers.set('Accept', '*') });
         
         //request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') }); //application/json
        // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', '*/*') }); //application/json
        // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Methods', '*/*') }); //application/json
        
       // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', 'Authorization, Expires, Pragma, DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range') }); 
        //request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', 'Authorization, Expires, Pragma, DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range, X-API-KEY, Origin, X-Requested-With, Accept, Access-Control-Request-Method, Authorization') }); 
        
            let newReq = request;
            newReq = request.clone({
              responseType: 'text' as 'json'
            });
        
          // return next.handle(newReq)
        return next.handle(newReq).pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {              
              this.dismissLoading();
            }
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            console.error(error);            
            this.dismissLoading();          
            return throwError(error);
          })
        ); 
    }
  
    async presentLoading() {
      this.isLoading = true;
      return await this.loadingCtrl.create({
        duration: 3000,
      }).then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => console.log());
          }
        });
      });
    }
    // Cierre del loading
    async dismissLoading() {
      this.isLoading = false;
      return await this.loadingCtrl.dismiss().then(() => 
      null);//console.log('dismissLoading')
    }  
  }