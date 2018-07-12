import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  
  myIcon: string = "settings";
  myIconColor: string = "dark";
  myTitleColor: string = "dark";
  arrData = []
  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
    this.fdb.list("/Thung/").subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });
  }

}
