import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the AllDoctors page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-all-doctors',
  templateUrl: 'all-doctors.html'
})
export class AllDoctorsPage {
  allDoctors: any[];

  constructor(public navCtrl: NavController) {
    var allData = JSON.parse(window.localStorage['appData']);
    this.allDoctors = allData.allDoctors;
  }

  ionViewDidLoad() {
    console.log('Hello AllDoctors Page');
  }

}
