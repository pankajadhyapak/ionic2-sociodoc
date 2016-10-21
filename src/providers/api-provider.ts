import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiProvider {
  public api: Http;
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
    this.api = http;
  }

  getAllDoctors(): Observable<any>{
    let headers = new Headers({ 'Authorization': 'Bearer '+ JSON.parse(window.localStorage['loggenUser']).token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get("http://api5.sociodoc.com/api/fetchAllData", options)
      .map(res => <any>(res.json()))
      .catch(this.handleError);
  }
  handleError(error:any): Observable<any> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }
}
