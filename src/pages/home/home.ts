import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CreateTeamPage } from '../create-team/create-team';
import { LigasProvider } from '../../providers/ligas/ligas';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Credenciales, UsuarioProvider } from '../../providers/usuario/usuario';
import { SharingProvider } from '../../providers/sharing/sharing';
import { ScorePage } from '../score/score';
import { PagosPage } from '../pagos/pagos';
import { VaticinioPage } from '../vaticinio/vaticinio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Ligas:any[]=[]
  invita:any[]=[]
  user: Credenciales = {};
  myParam: string = '';

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, private _Liga:LigasProvider,
    private socialSharing: SocialSharing,  public usuarioProv: UsuarioProvider, private _EnviaInvita:SharingProvider ) {

      this.user = this.usuarioProv.usuario;

           this._Liga.getLigas()
            .subscribe( data =>{
              
              for(let key$ in data){
                
                this.Ligas.push(data[key$]);
              }
              console.log(this.Ligas);
      
      
            }) 
    

        }
      openCreateTeam(){
    
        let modal = this.modalCtrl.create(CreateTeamPage);
        modal.present();
      }
    

      setScore(param:string){
        this.myParam = param;
        this.navCtrl.push(ScorePage, { 'myParam': this.myParam });
      }
      

      Pagos(param:string){
        
        this.myParam = param;
        this.navCtrl.push(PagosPage, { 'myParam': this.myParam });
        
      }
      
      getVaticinio(param:string ){
    
        this.myParam = param;
        this.navCtrl.push(VaticinioPage, { 'myParam': this.myParam });
      }
      

      regularShare(prueba:string){

        var msg = "Unete a mi Liga en MundiQuiniela";
  
        this.invita.push( this.user.email);
        this.invita.push(prueba);
        this.invita.push(msg);        

        console.log(prueba);
        console.log(msg);
        console.log(this.invita);

        this._EnviaInvita.nuevaInvitacion(this.invita)
             .subscribe(data=>{
          
          })

          // this.socialSharing.share(msg, "MundiQuiniela", null, null);
      }
    
}


