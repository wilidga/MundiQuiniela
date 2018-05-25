import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invita } from '../../app/interface/invita.interface';

/*
  Generated class for the SharingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharingProvider {


  InvitaURL:string ="https://loginquiniela.firebaseio.com/Sharing.json"

  
  constructor(public http: HttpClient) {
    console.log('Hello LigasProvider Provider');
  }

  nuevaInvitacion(invita:any[]){

    let body = JSON.stringify(invita);
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
