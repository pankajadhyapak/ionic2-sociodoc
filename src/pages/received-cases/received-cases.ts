import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CaseDetailPage} from "../case-detail/case-detail";

/*
  Generated class for the ReceivedCases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-received-cases',
  templateUrl: 'received-cases.html'
})
export class ReceivedCasesPage {
  receivedCases : any[];
  nav: NavController;
  constructor(public navCtrl: NavController) {
     this.nav = navCtrl;
    this.receivedCases = (JSON.parse(window.localStorage['appData'])).received_cases.reverse();
  }

  ionViewDidLoad() {
    console.log('Hello ReceivedCases Page');
  }

    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.receivedCases = this.receivedCases.filter((item) => {
        return (item.caseIdentifier.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  private initializeItems() {
    this.receivedCases = (JSON.parse(window.localStorage['appData'])).received_cases.reverse();
  }

  showCaseDetail(singleCase){
      console.log(singleCase);
      this.nav.push(CaseDetailPage, {
          case: singleCase
      });
  }
}
