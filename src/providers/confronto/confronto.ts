import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ConfrontoProvider {

  constructor(private db: AngularFirestore) { }

  public proximosConfrontos() {
    return this.db.collection('confrontos',
      ref => ref.where("data", "==", "2018-10-21").orderBy("jogo")
    ).valueChanges();
  }

}
