import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GroupsProvider {




  constructor(public http: HttpClient) {
    
  }

  getGrupos() {       
      
          
      return this.http.get("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json")
      .map(res=>  {
        return res; 
       });


  }

  
}
