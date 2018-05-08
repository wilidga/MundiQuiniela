import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

import { AlertController } from 'ionic-angular';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {
  

 

}
