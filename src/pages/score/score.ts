import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GroupsProvider } from '../../providers/groups/groups';
import { Score } from '../../app/interface/score.interface';
import { PuntajesfinalesProvider } from '../../providers/puntajesfinales/puntajesfinales';


@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage implements OnInit {

  Teams:any[]=[]
  stadiums:any[]=[]
  Gruposa:any[]=[]
  Gruposb:any[]=[]
  Gruposc:any[]=[]
  Gruposd:any[]=[]
  Grupose:any[]=[]
  Gruposf:any[]=[]
  Gruposg:any[]=[]
  Gruposh:any[]=[]
  myParam: string;


  public GolHome:number;
  public GolAway:number;
  
  score:Score={
    liga:"",
    grupo:"",
    home_team:"",
    valueHome:0,
    away_team:"",
    valueAway:0 ,
    urlaway:"",
    urlhome:""


  }

  
  constructor(public navCtrl: NavController, public navParams: NavParams , public _grupos:GroupsProvider,
     private _puntaje:PuntajesfinalesProvider,public viewCtrl: ViewController,
    params: NavParams) {
      this.myParam = params.get('myParam');
      console.log(this.myParam);
    
  }

  ionViewDidLoad() {    
  }
  ngOnInit(){    
  
    this._grupos.getGrupos()
    .subscribe( (data:any) =>{
            
      console.log(data);
      this.Teams= data.teams;
      this.stadiums= data.stadiums;
      
      
      this.Gruposa= data.groups.a.matches;
      this.Gruposb= data.groups.b.matches;
      this.Gruposc= data.groups.c.matches;
      this.Gruposd= data.groups.d.matches;
      this.Grupose= data.groups.e.matches;
      this.Gruposf= data.groups.f.matches;
      this.Gruposg= data.groups.g.matches;
      this.Gruposh= data.groups.h.matches;
      console.log(this.Teams);
      console.log(this.Gruposa);
    }) 

        }

        getNameTeam(id:number) { 
          for(let item of this.Teams){
            
            if (item.id === id) {
              return item.name;
            }

          }
          
      }
      getImgTeam(id:number) { 
        for(let item of this.Teams){
          
          if (item.id === id) {
            return item.flag;
          }

        }
        
    }
      getNameStadiums(id:number) { 
        for(let item of this.stadiums){
          
          if (item.id === id) {
            return item.name;
          }

        }
        
    }

    guardar(grupo:string , a: string, b:number, c:string,d:number,urlhome:string,urlaway:string){
      console.log(this.myParam + " " + grupo + " " + a + " " + b + " " + c + " "+ d);
      this.score.liga=this.myParam;
      this.score.grupo=grupo;
      this.score.home_team=a;
      this.score.valueHome=b;
      this.score.away_team=c;
      this.score.valueAway=d;
      this.score.urlhome=urlhome;
      this.score.urlaway =urlaway;
      this._puntaje.saveScores(this.score)
      .subscribe( data =>{
        console.log(data);
      })
      
    }
    dismiss() {
      this.viewCtrl.dismiss();
    }

 }
  



