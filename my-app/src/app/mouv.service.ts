import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MouvService {

  
  constructor(private http: Http) { }
  
    getAllMouvs() {
      return new Promise((resolve, reject) => {
        this.http.get('/mouvement')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
  
    showMouv(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/mouvement/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }
  
    saveMouv(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/mouvement', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    updateMouv(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/mouvement/'+id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
    deleteMouv(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/mouvement/'+id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
  
  }
  