import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SettingPage } from '../pages/setting/setting';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SubsettingPage } from '../pages/subsetting/subsetting'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { GooglePlus } from '@ionic-native/google-plus';


var config = {
  apiKey: "AIzaSyA-sIXtkHrqEp0WevWPQtAbL0Q6t6crZVM",
  authDomain: "deviceio-fae1f.firebaseapp.com",
  databaseURL: "https://deviceio-fae1f.firebaseio.com",
  projectId: "deviceio-fae1f",
  storageBucket: "deviceio-fae1f.appspot.com",
  messagingSenderId: "321430088917"
};

@NgModule({
  declarations: [
    MyApp,
    SettingPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubsettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubsettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
