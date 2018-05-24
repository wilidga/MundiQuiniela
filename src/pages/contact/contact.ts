import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StadiumsProvider } from '../../providers/stadiums/stadiums';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  Stadiums:any[]=[];

  constructor(public navCtrl: NavController, private _ST: StadiumsProvider) {

  }

  ngOnInit(){
    this.Stadiums = this._ST.GetStadiums();
     console.log(this.Stadiums);
    }


}
