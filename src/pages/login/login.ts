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
    this.navCtrl.setRoot(TabsPage);
  }
}