import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import {StorageService} from "../service/storage.service";
import {ApiService} from '../../app/service/api.service';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-consultaslistado',
  templateUrl: './consultaslistado.page.html',
  styleUrls: ['./consultaslistado.page.scss'],
})
export class ConsultaslistadoPage implements OnInit {
  consultas=[];
    links=[];
  acceso=this.storage.getVariable(this.storage.TipoVariable.UserId);
  usuarioNombre;

  constructor(private  router:  Router,private api: ApiService,private storage:StorageService) { }

  ngOnInit() {
  }
  getConsultas(){
    var request={
      "request":"consultasListado"
      ,"acceso":this.storage.getVariable(this.storage.TipoVariable.UserId)      
      ,"conexion":this.storage.getVariable(this.storage.TipoVariable.ConexionActual)      
    } ;
   
    this.api.sendPost(request).then((res)=>{     

this.consultas= JSON.parse(res);

    }
    ,error=>{

       console.log(error);
    }
    );
  
  }

  // conexionLinks
  irConsulta(id,nombre){

    var request={
      "request":"consultaFiltros"
      ,"consulta":id      
    } ;
   
    this.api.sendPost(request).then((res)=>{     
console.log(res);

this.storage.setVariable(this.storage.TipoVariable.ConsultaFiltrosActual,res);
this.storage.setVariable(this.storage.TipoVariable.ConsultaActual,id);
this.storage.setVariable(this.storage.TipoVariable.ConsultaActualNombre,nombre);
console.log("consulta "+id);
this.router.navigateByUrl('consulta');

    } 
    ,error=>{

       console.log(error);
    }
    );

    
    

    }
 
  getLinks(){
    var request={
      "request":"conexionLinks"
     ,"acceso":this.storage.getVariable(this.storage.TipoVariable.UserId)      
      ,"conexion":this.storage.getVariable(this.storage.TipoVariable.ConexionActual)      
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
  
  
  ionViewDidEnter(){
    this.usuarioNombre=this.storage.getVariable(this.storage.TipoVariable.UserName);
      this.getConsultas();
      this.getLinks();
    
   }


  }


