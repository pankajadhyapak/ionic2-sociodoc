import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';
import {ApiProvider} from '../../providers/api-provider'
import {StorageProvider} from '../../providers/storage-provider'
import {LoginPage} from "../login/login";
import {CaseDetailPage} from "../case-detail/case-detail";

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

  myCases :any[];
  receivedCases: any[];
  nav: NavController;

  public events: Events;
  constructor(public navCtrl: NavController, public provider: StorageProvider, public api: ApiProvider, public eve: Events) {
    this.nav = navCtrl;
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
      this.myCases = (JSON.parse(window.localStorage['appData'])).my_cases.reverse();
      console.log(this.myCases);
      this.receivedCases = (JSON.parse(window.localStorage['appData'])).received_cases.reverse();

    } else {
      console.log("Not Logged In");
      navCtrl.setRoot(LoginPage);
    }
  }

  showCaseDetail(singleCase){
      console.log(singleCase);
      this.nav.push(CaseDetailPage, {
          case: singleCase
      });
  }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }
}
