import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  myIconGoogleColor: string = "danger";
  myIconSkypeColor: string = "primary";
  myTitleColor: string = "dark";
  
  constructor(public navCtrl: NavController) {

  }

}
