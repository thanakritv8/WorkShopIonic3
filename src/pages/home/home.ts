import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GooglePlus]
})
export class HomePage {

  myIcon: string = "bulb";
  myIconColor: string = "yellow";
  myTitleColor: string = "dark";
  
  arrData = [];

  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn:boolean = false;

  // Push Switch On Off
  toggleUpdate(item) {  
    const items = this.fdb.list('/Thung');
    items.update(item.$key, { status: item.status });
  }

  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase, private googlePlus: GooglePlus) {
    this.navCtrl = navCtrl;
    this.fdb.list("/Thung/").subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });

  }

  loginUser(): void {
    console.log("test");
    this.googlePlus.login({
      'webClientId': '321430088917-99glfg5jmsj909egrjdcnc3bb19ql3mu.apps.googleusercontent.com',
      'offline': true
    }).then((user) => {
      this.email = user.email;
      this.isLoggedIn = true;
      console.log(user.displayName + " " + user.email)
      alert("user");
    },function (error) {
      console.log(error);
      alert(error);
    })
  }

  /*loginUser() {
    this.googlePlus.login({})
    .then(res => {
      console.log(res);
      this.displayName = res.displayName;
      this.email = res.email;
      this.familyName = res.familyName;
      this.givenName = res.givenName;
      this.userId = res.userId;
      this.imageUrl = res.imageUrl;

      this.isLoggedIn = true;
      console.log(res.email);
    })
    .catch(err => console.error(err));
  }*/

  logoutUser(){
    this.googlePlus.logout()
    .then(res => {
      console.log(res);
      this.displayName = "";
      this.email = "";
      this.familyName = "";
      this.givenName = "";
      this.userId = "";
      this.imageUrl = "";

      this.isLoggedIn = false;
    })
    .catch(err => console.error(err));
  }
}
