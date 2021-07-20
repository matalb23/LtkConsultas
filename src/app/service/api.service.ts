import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


//const cabecera = {headers: new HttpHeaders({'Authorization': 'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'})};
const cabecera = {headers: new HttpHeaders({'Authorization': 'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'
//,'Access-Control-Max-Age':'1728000'
//,'Access-Control-Allow-Origin' : '*'
//,'Access-Control-Allow-Headers' : 'Content-Type,Authorization'

})};


// ,
// 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
// 'Accept':'application/json',
// 'content-type':'application/json'

// var headers = new Headers();
// headers.append('Access-Control-Allow-Origin' , '*');
// headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
// headers.append('Accept','application/json');
// headers.append('content-type','application/json');
//  let options = new RequestOptions({ headers:headers,withCredentials: true});

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.LtkConsultas_Url; 

  constructor(private httpClient: HttpClient) { }
  public sendPost(usuario: any): Observable<any> {
  
    //return this.httpClient.post<any>(this.url , usuario, cabecera);
    return this.httpClient.post<any>(this.url , usuario, cabecera);
  }
  // public conexiones(acceso: any): Observable<any> {
  //   return this.httpClient.post<any>(this.url , acceso, cabecera);
  // }
}
