import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { SubsettingPage } from '../subsetting/subsetting'

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  
  myIcon: string = "settings";
  myIconColor: string = "primary";
  myTitleColor: string = "dark";
  arrData = []
  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
    this.fdb.list("/Thung/").subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(SubsettingPage, { item: item });
  }

}
