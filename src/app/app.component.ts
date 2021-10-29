import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { StorageService } from "../app/service/storage.service";

import { ApiService } from '../app/service/api.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform: Platform, private router: Router, private api: ApiService, private storage: StorageService, private toastCtrl: ToastController) {

console.log("AppComponent");
    this.platform.ready().then(() => {
     console.log("this.storage.getVariable(this.storage.TipoVariable.User", this.storage.getVariable(this.storage.TipoVariable.User) )
      if (this.storage.getVariable(this.storage.TipoVariable.User) != "" || this.storage.getVariable(this.storage.TipoVariable.User) != null) {
        var user = {
          "request": "login"
          , "user": this.storage.getVariable(this.storage.TipoVariable.User)
          , "password": this.storage.getVariable(this.storage.TipoVariable.Pass)
        };

        console.log("user AppComponent",user);

        this.api.sendPost(user).then((res) => {

          var respuesta = JSON.parse(res);
          console.log("respuesta",respuesta)
          if (respuesta.status == 200) {

            this.router.navigateByUrl("conexion");
          }
        

        }
          , error => {

            console.log(error);
          }
        );
      }
    }
    );
  }



}
