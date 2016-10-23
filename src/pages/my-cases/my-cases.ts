import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyCases Page');
  }

}
