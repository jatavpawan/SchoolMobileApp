import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ShardServiceService {
  isLoading = false;

  constructor(private callNumber: CallNumber, private toastController: ToastController, private loadingCtrl: LoadingController) { }

  SOSCAll(mobileNo: any) {
    this.callNumber.callNumber("+91" + mobileNo, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  async openToast(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: color
    });
    toast.present();
  }


  // async showLoading(showLoader: boolean) {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Loading...',
  //     duration: 2000,

  //   })
  //   showLoader == true ? loading.present() : loading.dismiss();
  // }


  
  async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      // duration: 5000,
      message: 'Loading...',
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

}
