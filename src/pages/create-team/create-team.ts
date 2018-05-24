import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-create-team',
  templateUrl: 'create-team.html',
})
export class CreateTeamPage {
  ocultar1: boolean  = false;
  ocultar2: boolean  = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTeamPage');
  }

  updateToDo(event){

    this.ocultar1 = event.checked;
    

  }
  updateToDoOne(event){

    
    this.ocultar2 = event.checked;

  }
 




}
