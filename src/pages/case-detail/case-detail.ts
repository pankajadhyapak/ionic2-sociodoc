import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CaseDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-case-detail',
  templateUrl: 'case-detail.html'
})
export class CaseDetailPage {
   SingleCase:any;
   pet: string = "details";
   isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.SingleCase = navParams.get('case');
  }

  ionViewDidLoad() {
    console.log(this.SingleCase);
  }

}
