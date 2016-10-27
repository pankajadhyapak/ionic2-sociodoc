import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Utils provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Utils {

  constructor(public http: Http) {
    console.log('Hello Utils Provider');
  }
  static getAvatar(name: string){
    if(name != "" || name != null){
       return "assets/avatars/"+name.slice(0, 1).toUpperCase() + ".png";
    }else {
      return "assets/avatars/placeholder.png";
    }
  }

}
