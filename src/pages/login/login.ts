import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { UsuarioProvider } from '../../providers/usuario/usuario';
import { HomePage } from '../home/home';

import { Platform } from 'ionic-angular';


import { GooglePlus } from '@ionic-native/google-plus';
import { AboutPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              public usuarioProv: UsuarioProvider,
              private googlePlus: GooglePlus,
              private platform: Platform) {
  }

  signInGoogle() {

    // this.googlePlus.login({
    //   'webClientId': '528085158243-j9vtggcl6siodumeblu9t25jdg82hg3g.apps.googleusercontent.com',
    //   'offline': true
    // }).then( res => {
      
    //   firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
    //   .then( user => {
    //     console.log(JSON.stringify(user));
  
    //           this.usuarioProv.cargarUsuario(
    //             user.displayName,
    //             user.email,
    //             user.photoURL,
    //             user.uid,
    //             'google'
    //           );
      
    //           this.navCtrl.setRoot(AboutPage);
    //   })
    //   .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
    // }).catch(err => console.error("Error: " + JSON.stringify(err))) ;

    this.navCtrl.setRoot(TabsPage);
  }



}
