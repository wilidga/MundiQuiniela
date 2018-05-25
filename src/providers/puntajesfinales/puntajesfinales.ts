import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score } from '../../app/interface/score.interface';


@Injectable()
export class PuntajesfinalesProvider {

 
  LigaUrl:string ="https://loginquiniela.firebaseio.com/score.json"

  
  constructor(public http: HttpClient) {
    console.log('Hello LigasProvider Provider');
  }

  saveScores(score:Score){

    let body = JSON.stringify(score);
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
