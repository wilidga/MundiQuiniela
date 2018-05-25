import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Liga } from '../../app/interface/liga.interface';
import { FromEventPatternObservable } from 'rxjs/observable/FromEventPatternObservable';
import { LigasProvider } from '../../providers/ligas/ligas';



@IonicPage()
@Component({
  selector: 'page-create-team',
  templateUrl: 'create-team.html',
})
export class CreateTeamPage {
  ocultar1: boolean  = false;
  ocultar2: boolean  = false;
  
  Liga:Liga={
    Nombre:"",
    snDiversion:false,
    snPago:false,
    ValorPago:0

  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private _Liga:LigasProvider) {
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
 
   closeModal(){
     this.navCtrl.setRoot(TabsPage);
  }

    guardar(){
      console.log(this.Liga);
      this._Liga.nuevaLiga(this.Liga)
        .subscribe(data=>{
          
        })
    }
    
}
