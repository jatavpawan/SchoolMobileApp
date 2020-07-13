import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../dataservice/data.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private dataService: DataService, 
    public navCtrl: NavController,
  ) { }

  setUserdata(userdata) {
     localStorage.setItem("LoggedInUser", JSON.stringify (userdata))
   }
   getUserdata() {
     return  localStorage.getItem("LoggedInUser");
   }

  setToken(token: string) {
     localStorage.setItem("id_token", token);
   }
   getToken() {
     return  localStorage.getItem("id_token");
   }

   isLoggedIn() {
     return this.getUserdata() !== null;
   }
   logout() {
     localStorage.removeItem("LoggedInUser");
     localStorage.removeItem("id_token");
     this.navCtrl.navigateRoot('/');
   }

   loginUser(data){
      return <Observable<any>> this.dataService.postData('auth/login', data);
    }
}