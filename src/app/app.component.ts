import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';
import { AuthenticationService } from './services/authservice/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;
  expandMenuItemIndex: number = -1;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public authService: AuthenticationService,
  ) {
    this.appPages = [
      // {
      //   title: 'Dashboard',
      //   url: '/dashboard',
      //   direct: 'root',
      //   icon: 'home'

      // },
      // {
      //   title: 'Dashboard',
      //   url: '/home-results',
      //   direct: 'forward',
      //   icon: 'home'

      // },
        {
        title: 'Home',
        url: '/home-results',
        direct: 'forward',
        icon: 'home'
      },
     
      
      {
        title: 'Academic',
        url: '/home-results',
        direct: 'forward',
        icon: 'school',
        subMenu: [{
          title: 'Time Table',
          url: '/academic-time-table',
          direct: 'forward',
          icon: 'ribbon'
        },{
          title: 'Subject Teacher',
          url: '/academic-subject-teacher',
          direct: 'forward',
          icon: 'ribbon'
        },{
          title: 'Class Teacher',
          url: '/academic-Class-teacher',
          direct: 'forward',
          icon: 'ribbon'
        }]
      },
      {
        title: 'Student',
        url: '/about',
        direct: 'forward',
        icon: 'ribbon',  
         subMenu: [{
          title: 'Student Card',
          url: '/student-card',
          direct: 'forward',
          icon: 'ribbon'
        },{
          title: 'Student Attendence',
          url: '/student-attendence',
          direct: 'forward',
          icon: 'ribbon'
        }]
      },

      {
        title: 'Employee',
        url: '/settings',
        direct: 'forward',
        icon: 'people',
        subMenu: [{
          title: 'Employee Card',
          url: '/employee-card',
          direct: 'forward',
          icon: 'ribbon'
        },{
          title: 'Leave Request',
          url: '/leave-request',
          direct: 'forward',
          icon: 'ribbon'
        }]
      },

      {
        title: 'Communication',
        url: '/settings',
        direct: 'forward',
        icon: 'logo-reddit'
      },
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },

      {
        title: 'App Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      } 
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.authService.logout();
    // this.navCtrl.navigateRoot('/');
  }
  expandMenuItem(index){
    this.expandMenuItemIndex == index ? this.expandMenuItemIndex = -1 : this.expandMenuItemIndex = index;
    
  }
}
