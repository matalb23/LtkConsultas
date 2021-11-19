import { Injectable } from '@angular/core';
 enum TipoVariable{
User="USER",
UserName="USERNAME",
UserId="USERID",
Pass="PASS",
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
    //return localStorage.getItem(variable);
    //return JSON.parse(localStorage.getItem(variable));
  }
}
