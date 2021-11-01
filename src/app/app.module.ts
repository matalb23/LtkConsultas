import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http'; /*SI ES NECESARIO WEB descomentar*/
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HTTP } from '@ionic-native/http/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {StorageService} from "../app//service/storage.service";

import { 
  HTTP_INTERCEPTORS, 

} from '@angular/common/http';

import { HttpConfigInterceptor } from '../app/service/httpConfig.interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],//HttpClientModule /*SI ES NECESARIO WEB descomentar e incluir en los imports*/
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },StorageService,HTTP,
  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
