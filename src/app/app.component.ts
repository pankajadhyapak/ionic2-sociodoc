import {Component, ViewChild} from "@angular/core";
import {Platform, MenuController, Nav, Events} from "ionic-angular";
import {StatusBar} from "ionic-native";
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

  constructor(public platform: Platform,
              public menu: MenuController,
              public events: Events) {
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

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
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
