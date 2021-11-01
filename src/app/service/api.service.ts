import { Injectable } from '@angular/core';
//import { HttpHeaders, HttpClient } from '@angular/common/http'; /*SI ES NECESARIO WEB descomentar*/
import { HTTP } from '@ionic-native/http/ngx';

import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


<<<<<<< HEAD
//const cabecera = {headers: new HttpHeaders({'Authorization': 'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'})};
const cabecera = {headers: new HttpHeaders({'Authorization': 'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'
//,'Access-Control-Max-Age':'1728000'
,'Access-Control-Allow-Origin' : 'http://consultas.latikait.com.ar'
//,'Access-Control-Allow-Headers' : 'Content-Type,Authorization'
=======
/*SI ES NECESARIO WEB descomentar*/
//commentado20211029 const cabecera = {headers: new HttpHeaders({'Authorization': 'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'
//commentado20211029 })};
>>>>>>> 6596dbca00895ef47f0b2e2d129487f833b144c5


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.LtkConsultas_Url; 
  //constructor(private httpClient: HttpClient) { }/*SI ES NECESARIO WEB descomentar*/
  constructor(private http: HTTP) { }
  public sendPost(usuario: any) {
  
    const httpHeader = {
      'Content-Type':  'application/json',
      'Authorization':'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'
    };
    
    
    this.http.setDataSerializer('json');
    return this.http.post(this.url , usuario,httpHeader)
    .then(response=>{
          return response.data;
    })
    
    ;
  }
  /*SI ES NECESARIO WEB descomentar*/
  /* Cambiar then por suscribe
  public sendPost(usuario: any): Observable<any> {
    return this.httpClient.post<any>(this.url , usuario, cabecera);
  }*/
  
}
