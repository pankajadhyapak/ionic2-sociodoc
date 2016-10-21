import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api-provider'
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

  constructor(public navCtrl: NavController, public provider: StorageProvider, public api : ApiProvider) {

      if(provider.isLoggedIn()){
          console.log("Logged In");
          api.getAllDoctors()
          .subscribe(user => {
            window.localStorage['appData'] = JSON.stringify(user);
          },
            err => {
              alert(err);
            }
           );
      }else{
          console.log("Not Logged In");
      }
  }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

}
