import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authservice/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

     constructor(private authService : AuthenticationService){

     }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        
       const idToken = this.authService.getToken();

       if(idToken){
        const cloned = req.clone({
            headers : req.headers.set("Authorization", "Bearer "+ idToken)
        })
        return next.handle(cloned);

       }
       else{
        return next.handle(req);
       }

    }
}