import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Pagos } from '../../app/interface/pago.interface';
import { PagoTarjetaProvider } from '../../providers/pago-tarjeta/pago-tarjeta';

/**
 * Generated class for the PagosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
})
export class PagosPage {
  myParam = ""
  pagosTC:Pagos = {
    Nombre:"",
    anio:0,
    mes:0,
    numero:0,
    codigo:0,
    nit:"" ,
    monto:0
  }
  constructor(public navCtrl: NavController,  public navParams: NavParams,public viewCtrl: ViewController,
    params: NavParams, private _pagoTC:PagoTarjetaProvider) {
      this.myParam = params.get('myParam');
      console.log(this.myParam);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PagosPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  guardar(){
    console.log(this.pagosTC);
    this._pagoTC.savePagos(this.pagosTC)
    .subscribe( data=>{

    })
  }
}
