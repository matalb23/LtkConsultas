import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import {StorageService} from "../service/storage.service";
import {ApiService} from '../../app/service/api.service';

@Component({
  selector: 'app-desglose',
  templateUrl: './desglose.page.html',
  styleUrls: ['./desglose.page.scss'],
})
export class DesglosePage implements OnInit {

  constructor(private  router:  Router,private api: ApiService,private storage:StorageService) { }
desglose=[];
  ngOnInit() {
  }
  ionViewDidEnter(){
    this.desglose=JSON.parse(this.storage.getVariable(this.storage.TipoVariable.DatosDesglose));
    
    // console.log(this.desglose);
    
   }
}
