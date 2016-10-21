import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {StorageProvider} from '../providers/storage-provider';
import {AuthProvider} from '../providers/auth-provider';
import {AllDoctorsPage} from '../pages/all-doctors/all-doctors'
import {ApiProvider} from '../providers/api-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AllDoctorsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AllDoctorsPage
  ],
  providers: [StorageProvider, AuthProvider, ApiProvider]
})
export class AppModule {}
