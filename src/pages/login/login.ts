import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth-provider'

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
  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
      this.auth = authProvider;
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.auth.login(formData.value.email, formData.value.password).subscribe(users => {
      console.log(users)
    });
    }
  }

}
