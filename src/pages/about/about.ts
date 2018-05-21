import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EquiposProvider } from '../../providers/equipos/equipos';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  
   Teams:any[]=[];

  constructor(public navCtrl: NavController, 
  private _sc:EquiposProvider  
  ) {}

ngOnInit(){
  this.Teams = this._sc.GetTeams();
   console.log(this.Teams);
  }

}
