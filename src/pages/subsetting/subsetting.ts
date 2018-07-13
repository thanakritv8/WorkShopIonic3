import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

@IonicPage()
@Component({
  templateUrl: 'subsetting.html',
})
export class SubsettingPage {

  item;
  tbRename:string = ""; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase, public toastCtrl: ToastController) {
    this.item = navParams.data.item;
    console.log(this.item);

  }

  showToast(position: string, msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  timestatusUpdate(item) {  
    const items = this.fdb.list('/Thung');
    items.update(item.$key, { timestatus: item.timestatus });
  }

  timesetUpdate(item) {  
    const items = this.fdb.list('/Thung');
    items.update(item.$key, { timeset: item.timeset });
  }

  renameUpdate(item) {
    try {
      console.log(this.tbRename) 
      const items = this.fdb.list('/Thung');
      items.update(item.$key, { name: this.tbRename });
      this.showToast('bottom', "Save name '" + this.tbRename + "' Success.")
      this.tbRename = "";
    }
    catch(err) {
      this.showToast('bottom', err.message)
    }
    
  }

}
