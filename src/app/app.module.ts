import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultadoPage } from '../pages/resultado/resultado';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfrontoProvider } from '../providers/confronto/confronto';

const firebaseConfig = {
  apiKey: 'AIzaSyCnR6dfQA0B5fFsy1EOzO6MNXHQz6gvQgM',
  authDomain: 'flag-api.firebaseapp.com',
  databaseURL: 'https://flag-api.firebaseio.com',
  projectId: 'flag-api',
  storageBucket: 'flag-api.appspot.com',
  messagingSenderId: '443896829935'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfrontoProvider
  ]
})
export class AppModule { }
