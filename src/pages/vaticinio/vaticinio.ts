import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PuntajesfinalesProvider } from '../../providers/puntajesfinales/puntajesfinales';
import { Score } from '../../app/interface/score.interface';

/**
 * Generated class for the VaticinioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vaticinio',
  templateUrl: 'vaticinio.html',
})
export class VaticinioPage implements OnInit {

  myParam = 'Wilman';
  Puntajes:Score[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,
    params: NavParams, private _Puntajes: PuntajesfinalesProvider) {
      this.myParam = params.get('myParam');
      console.log(this.myParam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VaticinioPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ngOnInit(){
    this._Puntajes.getPuntajes()
    .subscribe( data =>{
              
      for(let key$ in data){
        
        this.Puntajes.push(data[key$]);
      }
      console.log(this.Puntajes);


    }) 
  }

}
