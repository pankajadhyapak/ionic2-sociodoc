import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ReceivedCases Page');
  }

}
