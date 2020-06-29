import { Component, OnInit } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  ctrl: any = [
    {
      studentName: 'Jivan Kesav Shah',
      gender:'m',
      age:'#151 (9 Year 4 Month)',
      Class: 'Grade I',
      IsAlloted: true,
      gardian:"Keshav",
      gardianMobile:"8827439088"
    },
    {
      studentName: 'Munni Kalla',
      gender:'f',
      age:'#101 (10 Year 10 Month)',
      Class: 'Grade IV',
      IsAlloted: true,
      gardian:"Javed Kalla",
      gardianMobile:"987504321"
    },
    {
      studentName: 'Aslam Bajwa',
      gender:'m',
      age:'#104 (7 Year 4 Month)',
      Class: 'UKG',
      IsAlloted: false,
      gardian:"Anand Bajwa",
      gardianMobile:"8827439088"
    },
    {
      studentName: 'Bhagvati Jain',
      gender:'f',
      age:'#112 (3 Year 4 Month)',
      Class: 'Grade II',
      IsAlloted: true,
      gardian:"Tejram",
      gardianMobile:"7688765678"
    },
  
 

  ]
  constructor(private sharedservice:ShardServiceService, public navCtrl: NavController) { }

  ngOnInit() {
  }

  Calltonum(mobileNo:any){
    this.sharedservice.SOSCAll(mobileNo);
  }

  doProfile(){

this.navCtrl.navigateForward('student-profile/2')
  }

}
