import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubsettingPage } from './subsetting';

@NgModule({
  declarations: [
    SubsettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SubsettingPage),
  ],
})
export class SubsettingPageModule {}
