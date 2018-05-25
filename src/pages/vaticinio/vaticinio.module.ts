import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VaticinioPage } from './vaticinio';

@NgModule({
  declarations: [
    VaticinioPage,
  ],
  imports: [
    IonicPageModule.forChild(VaticinioPage),
  ],
})
export class VaticinioPageModule {}
