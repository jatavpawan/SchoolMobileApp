import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiendpoint = environment.apiendpoint;
  constructor(private http : HttpClient) { }

  getData(url){
    return this.http.get(this.apiendpoint+url);
  }
  postData(url, value){
    return this.http.post(this.apiendpoint+url, JSON.stringify(value), { headers : new HttpHeaders ({ "Content-type": "application/json; charset=UTF-8" }) });
  }
  postFormData(url, value){
    return this.http.post(this.apiendpoint+url, value);
  }
}
