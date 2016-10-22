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
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('Hello AllDoctors Page');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.allDoctors = this.allDoctors.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  private initializeItems() {
    var allData = JSON.parse(window.localStorage['appData']);
    this.allDoctors = allData.allDoctors;
  }
}
