import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import {StorageService} from "../service/storage.service";

import {ApiService} from '../../app/service/api.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Browser } from '@capacitor/browser';
//import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.page.html',
  styleUrls: ['./conexion.page.scss'],
})
export class ConexionPage implements OnInit {
  conexiones=[];
  links=[];
  acceso=this.storage.getVariable(this.storage.TipoVariable.UserId);
  usuarioNombre;

  constructor(private  router:  Router,private api: ApiService,private storage:StorageService) { }

  ngOnInit() {
  
   this.usuarioNombre=this.storage.getVariable(this.storage.TipoVariable.UserName);
  }
  getConexiones(){
    var request={
      "request":"conexion"
      ,"acceso":this.storage.getVariable(this.storage.TipoVariable.UserId)      
    } ;
   
    this.api.sendPost(request).then((res)=>{     
    this.conexiones= JSON.parse(res);
    }
    ,error=>{
       console.log(error);
    }
    );
  
  }
  ionViewDidEnter(){
   this.usuarioNombre=this.storage.getVariable(this.storage.TipoVariable.UserName);
    this.getConexiones();
    this.getLinks();
  }
  irConsultas(id){
    this.storage.setVariable(this.storage.TipoVariable.ConexionActual,id);
    this.router.navigateByUrl('consultaslistado');
    
  }
  
  getLinks(){
    var request={
      "request":"conexionLinks"
     ,"acceso":this.storage.getVariable(this.storage.TipoVariable.UserId)      
      ,"conexion":null//this.storage.getVariable(this.storage.TipoVariable.ConexionActual)      
    } ;
   
    this.api.sendPost(request).then((res)=>{     

this.links= JSON.parse(res);

    }
    ,error=>{

       console.log(error);
    }
    );
  
  }

async irLink  (parurl){
  if(parurl.includes("////")|| parurl.includes("\\\\"))
  {

    parurl=parurl.replace("////","//").replace("\\\\","\\")
 }
  console.log("url que va a navegar",parurl);
      await Browser.open({'url': parurl});   
};

}
