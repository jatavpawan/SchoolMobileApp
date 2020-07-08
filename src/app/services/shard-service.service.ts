import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Injectable({
  providedIn: 'root'
})
export class ShardServiceService {

  constructor(private callNumber: CallNumber) { }

  SOSCAll(mobileNo:any){
    this.callNumber.callNumber("+91"+mobileNo, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }


  
}
