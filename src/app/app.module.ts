import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


//pages
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { UserPage } from '../pages/user/user';
import { CreateTeamPage } from '../pages/create-team/create-team';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//plugins
import { GooglePlus } from '@ionic-native/google-plus';
import { UserloginProvider } from '../providers/userlogin/userlogin';
import { PuntajesfinalesProvider } from '../providers/puntajesfinales/puntajesfinales';
import { InvitaaceptaProvider } from '../providers/invitaacepta/invitaacepta';

//servicios
import { TeamsProvider } from '../providers/teams/teams';
import { EquiposProvider } from '../providers/equipos/equipos';
import { StadiumsProvider } from '../providers/stadiums/stadiums';



export const firebaseConfig = {
    apiKey: "AIzaSyC_GHu71FpgWJoQeSn75fB8pZ3x7gfxMn4",
    authDomain: "loginquiniela.firebaseapp.com",
    databaseURL: "https://loginquiniela.firebaseio.com",
    projectId: "loginquiniela",
    storageBucket: "loginquiniela.appspot.com",
    messagingSenderId: "528085158243"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    UserPage,
    CreateTeamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
      HttpModule,
      HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    UserPage,
    CreateTeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    UsuarioProvider,
    UserloginProvider,
    PuntajesfinalesProvider,
    InvitaaceptaProvider,
    TeamsProvider,
    EquiposProvider,
    StadiumsProvider
    
  ]
})
export class AppModule {}
