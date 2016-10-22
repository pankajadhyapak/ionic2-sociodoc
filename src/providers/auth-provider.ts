import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
/*
 Generated class for the AuthProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post("http://api5.sociodoc.com/api/login", {"email": email, "password": password}, null)
      .map(res => <any>(res.json()))
      .catch(this.handleError);
  }

  handleError(error: any): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
