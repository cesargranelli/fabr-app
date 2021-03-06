import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs';

import { ConfrontoProvider } from './../../providers/confronto/confronto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public confrontos: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public srvConfronto: ConfrontoProvider
  ) { }

  ionViewDidLoad(){
    this.confrontos = this.srvConfronto.proximosConfrontos();
  }

}
