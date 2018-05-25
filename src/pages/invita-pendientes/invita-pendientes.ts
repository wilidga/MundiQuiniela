import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharingProvider } from '../../providers/sharing/sharing';
import { Invita } from '../../app/interface/invita.interface';



@IonicPage()
@Component({
  selector: 'page-invita-pendientes',
  templateUrl: 'invita-pendientes.html',
})
export class InvitaPendientesPage implements OnInit {

  
  invita:any[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams
  , private _sha:SharingProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitaPendientesPage');
  }

  ngOnInit(){
    this._sha.getInvitaciones()
    .subscribe (data=>
      {
        
        for(let key$ in data){
                
          this.invita.push(data[key$]);
        }
        
        console.log(this.invita);
      }

    )}
}
