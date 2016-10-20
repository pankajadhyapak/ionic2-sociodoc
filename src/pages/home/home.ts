import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StorageProvider} from '../../providers/storage-provider'

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public provider: StorageProvider) {
      if(provider.isLoggedIn()){
          console.log("Logged In");
      }else{
          console.log("Not Logged In");
      }
  }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

}
