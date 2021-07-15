import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StorageService } from "../service/storage.service";

import { ApiService } from '../../app/service/api.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private api: ApiService, private storage: StorageService, private toastCtrl: ToastController,) { }

  ngOnInit() {
  }

  login(form) {
    var user = {
      "request": "login"
      , "user": form.value.login
      , "password": form.value.pswd
    };

    console.log(user);

    this.api.sendPost(user).subscribe((res) => {

      var respuesta = JSON.parse(res);
      if (respuesta.status == 200) {

        this.storage.setVariable(this.storage.TipoVariable.User, form.value.login);
        this.storage.setVariable(this.storage.TipoVariable.Pass, form.value.pswd);
        this.storage.setVariable(this.storage.TipoVariable.Propietario, respuesta.propietario);
        this.storage.setVariable(this.storage.TipoVariable.UserId, respuesta.usuarioId);
        this.storage.setVariable(this.storage.TipoVariable.UserName, respuesta.usuarioNombre);

        console.log(respuesta);
        this.router.navigateByUrl("conexion");
      }
      else {
        console.log(respuesta.message);
        this.presentErrorToast(respuesta.message);
      }

    }
      , error => {

        console.log(error);
      }
    );

  }
  iraregistrar() {
    this.router.navigateByUrl('register');
  }
  async presentErrorToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      color: 'danger',
      cssClass: 'toast'
      //showCloseButton: true,
      //   closeButtonText: "OK",
    });
    toast.present();

  }


}
