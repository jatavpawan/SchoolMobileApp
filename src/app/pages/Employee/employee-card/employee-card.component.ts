import { Component, OnInit } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  checked: Boolean = false;
  ctrl: any = [
    {
      employeeName: 'Aarif Arora',
      empCode:'SM0108',
      gender:'m',
      age:'(23 Year 7 Month)',
      Class: 'Academic Department Nursery Trained Teacher (Teaching Staff)',
      IsAlloted: true,
      gardian:"since 30-04-2018 ",
      gardianMobile:"8827439088"
    }, {
      employeeName: 'Devki Chand',
      empCode:'SM0112',
      gender:'f',
      age:'(25 Year 7 Month)',
      Class: 'Academic Department Primary Teacher (Teaching Staff)',
      IsAlloted: true,
      gardian:"since 28-02-2019 ",
      gardianMobile:"984321568"
    },
    {
      employeeName: 'Vivek Rai',
      empCode:'SM0308',
      gender:'m',
      age:'(28 Year 5 Month)',
      Class: 'Academic Department Trained Graduate Teacher (Teaching Staff)',
      IsAlloted: true,
      gardian:"since 22-06-2020 ",
      gardianMobile:"9876543215"
    },
    {
      employeeName: 'Ramakant Rai',
      empCode:'SM0368',
      gender:'m',
      age:'(21 Year 9 Month)',
      Class: 'Other Librarian (Library Staff)',
      IsAlloted: true,
      gardian:"since 23-08-2019 ",
      gardianMobile:"9876543215"
    },
   
 

  ]
  constructor(private sharedservice:ShardServiceService, public navCtrl: NavController) { }

  ngOnInit() {
  }

  Calltonum(mobileNo:any){
    this.sharedservice.SOSCAll(mobileNo);
  }
  doProfile(){

    this.navCtrl.navigateForward('employee-profile/2')
      }
    


}
