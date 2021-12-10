import { Injectable } from '@angular/core';
import {TextZoom,SetOptions,GetResult} from "@capacitor/text-zoom";
 enum TipoVariable{
User="USER",
UserName="USERNAME",
UserId="USERID",
Pass="PASS",
UserZoom="USERZOOM",
Propietario="PROPIETARIO",
ConexionActual="CONEXIONACTUAL",
ConsultaActual="CONSULTAACTUAL",
ConsultaActualNombre="CONSULTAACTUALNOMBRE",
ConsultaFiltrosActual="CONSULTAFILTROSACTUAL",
DatosDesglose="DATOS_DESGLOSE",
DesgloseTitulo="Titulo_DESGLOSE"
}
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public  TipoVariable = TipoVariable;//static readonly

  public setVariable(variable: TipoVariable, valor: any): void {
    window.localStorage.removeItem(variable);
    window.localStorage.setItem(variable, valor);
  }

  public getVariable(variable: TipoVariable): any {
   return localStorage.getItem(variable);
  }

  public setVariableN(variable: TipoVariable, valor: number): void {
    window.localStorage.removeItem(variable);
    window.localStorage.setItem(variable, valor.toFixed(1));
  }

  public getVariableN(variable: TipoVariable): number {
   return parseFloat(localStorage.getItem(variable));
  }
  zoomingAndSave(val)
  {
    let userZoom:number=0;
    if(isNaN(this.getVariable(TipoVariable.UserZoom)))
    { userZoom=0;}
    else
    { userZoom=parseFloat(this.getVariable(TipoVariable.UserZoom))+parseFloat(val);}
    
  console.log("val+userZoom",userZoom)
      this.setVariable(TipoVariable.UserZoom,userZoom)
  this.zooming(val);
  }
  zooming(val)
  {    
 
   TextZoom.get().then((val1:GetResult)=>{
     var currentZoom=val1.value;
     var options:SetOptions={
       value:currentZoom+parseFloat(val)
     }
     TextZoom.set(options);
   }) 
 }
 

}
