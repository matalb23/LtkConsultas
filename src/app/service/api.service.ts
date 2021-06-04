import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

// const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

//const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'})};
const cabecera = {headers: new HttpHeaders({'Authorization': 'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'})};
//,'Authorization':'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'

/*
var cabecera = new HttpHeaders();
cabecera.append('Content-Type', 'application/json'); 
cabecera.append('Authorization', 'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM'); 
*/
// const cabecera = new HttpHeaders().set('Content-Type', 'application/json')                             
//                                  .set('Authorization',  'Key=AIzaSyBvWq6NtYcPUvp7le-t6m2QOMGadOHqAgM');
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.LtkConsultas_Url; 

  constructor(private httpClient: HttpClient) { }
  public sendPost(usuario: any): Observable<any> {
    return this.httpClient.post<any>(this.url , usuario, cabecera);
  }
  // public conexiones(acceso: any): Observable<any> {
  //   return this.httpClient.post<any>(this.url , acceso, cabecera);
  // }
}
