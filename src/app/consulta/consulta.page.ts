import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import {StorageService} from "../service/storage.service";
import {FormBuilder, FormGroup,FormControl, Validators  } from '@angular/forms';
import {ApiService} from '../../app/service/api.service';
import { ToastController  } from '@ionic/angular';
type RequestItem = {
  id: string;
  valor: string;
  
}
 type Request = {
  request:string;
  consultaid:number
  acceso:number
  items: RequestItem[] 
}
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  //consultaFiltros=[];
  select=[];
  myFormGroup:FormGroup;
  acceso=this.storage.getVariable(this.storage.TipoVariable.UserId);
  usuarioNombre;
consultaNombre;
  constructor(private  router:  Router,private api: ApiService,private storage:StorageService,private formBuilder: FormBuilder,private toastCtrl: ToastController) { }
  filtros: any ;
  ngOnInit() {
    this.usuarioNombre=this.storage.getVariable(this.storage.TipoVariable.UserName);    
    this.consultaNombre=this.storage.getVariable(this.storage.TipoVariable.ConsultaActualNombre);
    let group={};
    this.filtros=JSON.parse(this.storage.getVariable(this.storage.TipoVariable.ConsultaFiltrosActual));
    console.log(this.filtros);
    let name;
    this.filtros.forEach(input_template=>{
name=input_template[3]+"_"+input_template[2];
      group[name]=new FormControl('');  
   
    })
    this.myFormGroup = new FormGroup(group);

  }
ViewDidEnter(){
    this.usuarioNombre=this.storage.getVariable(this.storage.TipoVariable.UserName);

   }
   desglose(columna,codigo,desgloseTitulo){

    var request={
      "request":"consultaDesglose"
      ,"consultaid":this.storage.getVariable(this.storage.TipoVariable.ConsultaActual)
      ,"codigoDesglose":codigo
    } ;
    let desgloseDatos=[];
    this.api.sendPost(request).then((res)=>{     
      
      desgloseDatos= JSON.parse(res);

if(desgloseDatos.length>0){
this.storage.setVariable(this.storage.TipoVariable.DesgloseTitulo,desgloseTitulo);
this.storage.setVariable(this.storage.TipoVariable.DatosDesglose,res);
this.router.navigateByUrl('desglose');
}else{
this.presentErrorToast("No hay mas datos para " + columna +" = "+codigo );

}

    } 
    ,error=>{

       console.log(error);
    }
    );
//alert(codigo);

   }
   async presentErrorToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top',
      color: 'danger',
      cssClass: 'toast'
       //showCloseButton: true,
    //   closeButtonText: "OK",
    });
    toast.present();
         
}    
sortNull() {}//para que tome el orden default
  onSubmit(){


    let request=<Request>{};
     let requestItems=<RequestItem>{};
     request.request="consultaSelect";
    request.consultaid=Number(this.storage.getVariable(this.storage.TipoVariable.ConsultaActual));
    request.acceso=Number(this.storage.getVariable(this.storage.TipoVariable.UserId));
    
    request.items=new Array();
    for (let key in this.myFormGroup.controls) {
      requestItems= <RequestItem>{};
      requestItems.id=key;
      requestItems.valor=this.myFormGroup.controls[key].value;
      
      request.items.push(requestItems);      
    }
   //console.log(this.myFormGroup.controls);
   ///console.log(request);


 
  this.api.sendPost(request).then((res)=>{     
    
    console.log(res);
    
    this.select= JSON.parse(res);
console.log(JSON.parse(res).datos.length);

      if(JSON.parse(res).datos.length==0){
      this.presentErrorToast("No se encontraron datos para los filtros ingresados"  );}


  }
  ,error=>{
    console.log("***");
     console.log(error);
  }
  ); 

} 

zooming(val)
{
  this.storage.zoomingAndSave(val);
} 

}
