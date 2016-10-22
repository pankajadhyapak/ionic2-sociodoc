import {Injectable} from '@angular/core';
/*
 Generated class for the StorageProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class StorageProvider {

  constructor() {
    console.log('Hello StorageProvider Provider');
  }

  set(key: string, value: string): string {
    return window.localStorage[key] = value;
  }

  get(key: string, defaultValue: any): any {
    return window.localStorage[key] || defaultValue;
  }

  isLoggedIn(): boolean {
    return this.get('loggedIn', false);
  }

  // setObject(key, value) {
  //   return window.localStorage[key] = JSON.stringify(value);
  // }
  // getObject(key) {
  //   return JSON.parse(window.localStorage[key] || false);
  // }
  // removeObject(key) {
  //   return JSON.parse(window.localStorage.removeItem(key) || false);
  // }
  // remove(key) {
  //   return (window.localStorage.removeItem(key) || false);
  // }

}
