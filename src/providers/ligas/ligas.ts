import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Liga } from '../../app/interface/liga.interface';
import 'rxjs/RX';  

@Injectable()
export class LigasProvider {

  LigaUrl:string ="https://loginquiniela.firebaseio.com/Liga.json"

  
  constructor(public http: HttpClient) {
    console.log('Hello LigasProvider Provider');
  }

  nuevaLiga(liga:Liga){

    let body = JSON.stringify(liga);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    })

    return this.http.post(this.LigaUrl, body , {headers:headers} )
    .map( res =>{
      console.log(res);
      return res;
    })

  }

getLigas(){
  return this.http.get(this.LigaUrl)
  .map(res=>  {
    return res; 
   });

}


}
