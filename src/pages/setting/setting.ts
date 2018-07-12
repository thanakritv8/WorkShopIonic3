import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  myTitleColor: string = "dark";
  
  constructor(public navCtrl: NavController) {

  }

}
