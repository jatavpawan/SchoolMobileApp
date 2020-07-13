import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';

// Components
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DataService } from './services/dataservice/data.service';
import { AuthenticationService } from './services/authservice/authentication.service';
import { AuthInterceptor } from './security/auth.interceptor';
import { AcademicService } from './services/academicservice/academic.service';
import { EmployeeService } from './services/employeeservice/employee.service';
import { StudentService } from './services/studentservice/student.service';




@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    SearchFilterPageModule
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    DataService,
    AuthenticationService,
    AcademicService,
    EmployeeService,
    StudentService,
    StatusBar,
    SplashScreen,CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
