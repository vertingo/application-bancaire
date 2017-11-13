import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  public token: string;

  constructor(public http: Http) {
    this.token = '';
  }

  login(data) {
    return new Promise((resolve, reject) => {
      this.http
      .post('/login', data)
      .map(res => res.json())
      .subscribe(res => {
        this.token = res.token;
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}