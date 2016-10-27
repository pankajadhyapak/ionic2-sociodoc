import {Component, ViewChild} from "@angular/core";
import {Platform, MenuController, Nav, Events, AlertController} from "ionic-angular";
import {StatusBar, Push, Splashscreen} from "ionic-native";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {AllDoctorsPage} from "../pages/all-doctors/all-doctors";
import {MyCasesPage} from "../pages/my-cases/my-cases";
import {ReceivedCasesPage} from "../pages/received-cases/received-cases";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, icon: string}>;
  loggedIn: boolean = false;
  loggedUser: any = {name: "", email: ""};
  alertCtrl: AlertController;

  constructor(public platform: Platform,
              public menu: MenuController,
              public events: Events,
              public alrtCtrl: AlertController) {
    this.alertCtrl = alrtCtrl;
    this.initializeApp();

    if (window.localStorage['loggedIn']) {
      this.rootPage = HomePage;
      this.loggedIn = true;
      this.loggedUser = JSON.parse(window.localStorage['loggenUser']);

    } else {
      this.rootPage = LoginPage;
      this.loggedIn = false;
    }
    // set our app's pages
    this.pages = [
      {title: 'Home', component: HomePage, icon: 'md-home'},
      {title: 'All Doctors', component: AllDoctorsPage, icon: 'md-people'},
      {title: 'My Cases', component: MyCasesPage, icon: 'md-albums'},
      {title: 'Received Cases', component: ReceivedCasesPage, icon: 'md-share'}
    ];

    events.subscribe('user:loggedIn', (userEventData) => {
      this.loggedUser = JSON.parse(window.localStorage['loggenUser']);
      console.log("user logged in");
    });
  }

  generateToken(){
    let push = Push.init({
        android: {
          senderID: "1037127861519"
        },
        ios: {
          alert: "true",
          badge: false,
          sound: "true"
        },
        windows: {}
      });

      push.on('registration', (data) => {
        console.log("device token ->", data.registrationId);
        alert(data.registrationId);
        //TODO - send device token to server
      });
      push.on('notification', (data) => {
        console.log('message', data.message);
        let self = this;
        //if user using app and push notification comes
        if (data.additionalData.foreground) {
          // if application open, show popup
          let confirmAlert = this.alertCtrl.create({
            title: 'New Notification',
            message: data.message,
            buttons: [{
              text: 'Ignore',
              role: 'cancel'
            }, {
              text: 'View',
              handler: () => {
                //TODO: Your logic here
                self.nav.push(HomePage, {message: data.message});
              }
            }]
          });
          confirmAlert.present();
        } else {
          //if user NOT using app and push notification comes
          //TODO: Your logic on click of push notification directly
          self.nav.push(HomePage, {message: data.message});
          console.log("Push notification clicked");
        }
      });
      push.on('error', (e) => {
        console.log(e.message);
      });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      StatusBar.styleLightContent();
      Splashscreen.hide();
      if(this.loggedIn){
        //this.generateToken();
      }
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  feedBack() {
    alert("Feedback");
  }

  logOut() {
    this.menu.close();
    window.localStorage.clear();
    this.nav.popAll();
    this.nav.push(LoginPage);
  }
}
