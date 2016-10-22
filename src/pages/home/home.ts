import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';
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

  public events: Events;
  constructor(public navCtrl: NavController, public provider: StorageProvider, public api: ApiProvider, public eve: Events) {
    if (provider.isLoggedIn()) {
      eve.publish("user:loggedIn", true);
      console.log("Logged In");
      api.getAllDoctors()
        .subscribe(user => {
            window.localStorage['appData'] = JSON.stringify(user);
          },
          err => {
            alert(err);
          }
        );
    } else {
      console.log("Not Logged In");
    }
  }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }
}
