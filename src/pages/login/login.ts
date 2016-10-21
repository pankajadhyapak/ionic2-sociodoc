import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth-provider'
import {HomePage} from '../home/home'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   auth: AuthProvider;
   navCtl : NavController;
   public login = {email:"", password: ""};
  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
      this.auth = authProvider;
      this.navCtl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }
  onSubmit() {
    if(this.login.email != "" && this.login.password != "") {
      this.auth.login(this.login.email, this.login.password)
      .subscribe(user => {
        window.localStorage['loggenUser'] = JSON.stringify(user);
        window.localStorage['loggedIn'] = true;
        this.navCtl.setRoot(HomePage);
      },
        err => {
          alert(err);
        }
       );
    }else{
      alert("Please Enter Email/Password ");
    }
  }

}
