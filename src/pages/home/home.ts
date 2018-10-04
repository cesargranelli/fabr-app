import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public confrontos: Observable<any>;/*
    {
      'data': '2018-10-14',
      'hora': '08:30',
      'rodada': 36,
      'mandante': {
        'nome': 'TIGERS',
        'escudo': 'assets/imgs/logos/sptigers-128x128.png'
      },
      'visitante': {
        'nome': 'GUARÁ',
        'escudo': 'assets/imgs/logos/whitecranes-128x116.png'
      }
    },
    {
      'data': '2018-10-14',
      'hora': '10:00',
      'rodada': 36,
      'mandante': {
        'nome': 'JUNDIAÍ',
        'escudo': 'assets/imgs/logos/jundiaifootball-128x128.png'
      },
      'visitante': {
        'nome': 'ATIBAIA',
        'escudo': 'assets/imgs/logos/atibaiasuperchargers-128x128.png'
      }
    }
  ];*/

  constructor(
    public navCtrl: NavController,
    public db: AngularFirestore
  ) {
    //this.confrontos = db.collection('confrontos').valueChanges();
  }

}
