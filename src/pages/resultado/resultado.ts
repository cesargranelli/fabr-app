import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs';

import { ConfrontoProvider } from './../../providers/confronto/confronto';

@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html'
})
export class ResultadoPage {

  public confrontos: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public srvConfronto: ConfrontoProvider
  ) { }

  ionViewDidLoad(){
    this.confrontos = this.srvConfronto.proximosConfrontos();
  }

}
