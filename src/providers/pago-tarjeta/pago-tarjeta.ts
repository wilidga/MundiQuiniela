import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagos } from '../../app/interface/pago.interface';


@Injectable()
export class PagoTarjetaProvider {


  InvitaURL:string ="https://loginquiniela.firebaseio.com/PagosTarjeta.json"

  
  constructor(public http: HttpClient) {
    console.log('Hello LigasProvider Provider');
  }

  savePagos(pagos:Pagos){

    let body = JSON.stringify(pagos);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    })

    return this.http.post(this.InvitaURL, body , {headers:headers} )
    .map( res =>{
      console.log(res);
      return res;
    })

  }

getInvitaciones(){
  return this.http.get(this.InvitaURL)
  .map(res=>  {
    return res; 
   });

}


}
