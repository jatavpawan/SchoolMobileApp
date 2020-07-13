import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShardServiceService } from '../shard-service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiendpoint = environment.apiendpoint;
  constructor(
    private http : HttpClient,
    private shareService : ShardServiceService, 
    private router : Router ,
    public navCtrl: NavController,

  ) { }

  getData(url){
    return this.http.get(this.apiendpoint+url).pipe(catchError(error => this.handleError(error)));
  }
  postData(url, value){
    return this.http.post(this.apiendpoint+url, JSON.stringify(value), { headers : new HttpHeaders ({ "Content-type": "application/json; charset=UTF-8" }) }).pipe(catchError(error => this.handleError(error)));
  }
  postFormData(url, value){
    return this.http.post(this.apiendpoint+url, value).pipe(catchError(error => this.handleError(error)));
  }

  handleError(err: HttpErrorResponse): Observable<any>{
    debugger;
    if (err.status === 401) {
      this.shareService.dismiss();
      this.shareService.openToast(err.error.message,"danger" );
      localStorage.removeItem("LoggedInUser");
      localStorage.removeItem("id_token");
      this.navCtrl.navigateRoot('/');
    }
    else{
      this.shareService.dismiss();
      if(err.error.errors.message != undefined && err.error.errors.message != null){
        this.shareService.openToast(err.error.errors.message[0],"danger" );
      }
      else if(err.error.errors.email_or_username != undefined && err.error.errors.email_or_username != null){
        this.shareService.openToast(err.error.errors.email_or_username[0],"danger" );
      }
    }
    
    throw err;
  }
    
}
