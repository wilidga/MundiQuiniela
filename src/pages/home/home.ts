import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CreateTeamPage } from '../create-team/create-team';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }
  openCreateTeam(){

    let modal = this.modalCtrl.create(CreateTeamPage);
    modal.present();
  }

}
