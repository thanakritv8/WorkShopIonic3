import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myIcon: string = "bulb";
  myIconColor: string = "yellow";
  myTitleColor: string = "dark";
  
  arrData = []

  // Push Switch On Off
  toggleUpdate(item) {  
    const items = this.fdb.list('/Thung');
    items.update(item.$key, { status: item.status });
  }

  userProfile: any = null;
  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase, private googlePlus: GooglePlus) {
    this.navCtrl = navCtrl;
    this.fdb.list("/Thung/").subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });

    firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.userProfile = user;
      } else { 
          this.userProfile = null;
      }
    });
  }

  loginUser(): void {
    this.googlePlus.login({
      'webClientId': '<Your web client ID>',
      'offline': true
    }).then( res => {
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
      firebase.auth().signInWithCredential(googleCredential).then( response => {
        console.log("Firebase success: " + JSON.stringify(response));
      })
    }).catch(err => console.error(err));
  }
}
