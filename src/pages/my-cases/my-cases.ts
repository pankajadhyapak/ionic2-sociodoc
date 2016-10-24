import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CaseDetailPage} from "../case-detail/case-detail";

/*
  Generated class for the MyCases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-cases',
  templateUrl: 'my-cases.html'
})
export class MyCasesPage {
  nav: NavController;
   myCases : any[];

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
      this.myCases = (JSON.parse(window.localStorage['appData'])).my_cases.reverse();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.myCases = this.myCases.filter((item) => {
        return (item.caseIdentifier.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  private initializeItems() {
    var allData = JSON.parse(window.localStorage['appData']);
    this.myCases = (JSON.parse(window.localStorage['appData'])).my_cases.reverse();
  }

  ionViewDidLoad() {
    console.log('Hello MyCases Page');
  }

  showCaseDetail(singleCase){
      console.log(singleCase);
      this.nav.push(CaseDetailPage, {
          case: singleCase
      });
  }
}
