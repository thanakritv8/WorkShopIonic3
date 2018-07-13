import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  myIconGoogleColor: string = "danger";
  myIconSkypeColor: string = "primary";
  myIconCallColor: string = "secondary";
  myTitleColor: string = "dark";
  
  constructor(public navCtrl: NavController) {

  }

}
