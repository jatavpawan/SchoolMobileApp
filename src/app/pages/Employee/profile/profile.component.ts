import { Component, OnInit } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employeeservice/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  employeeID: number = 0;
  employeeDetail: any;

  public items: any = [{
    title: 'Basic Information',
    icon: '../../../assets/img/graduation-cap.svg',
    expanded: false,
    data: {
      FirstName: 'Pawan', MiddleName: 'Kumar', LastName: 'Jatav',
      Gender: 'Male', DOB: '23-07-2011', BirthPlace: 'Raipur', UIN: '76547865543',
      Nationality: 'Indian', MotherTongue: 'Hindi', cast: 'Brahman', category: 'genera', religion: 'Hindu', BloodGroup: 'O+'
    }
  },

  {
    title: 'Contact Information',
    icon: '../../../assets/img/address-book.svg',
    expanded: false
  },

  {
    title: 'Account Information',
    icon: '../../../assets/img/people-carry.svg',
    expanded: false
  },
  {
    title: 'User Login',
    icon: '../../../assets/img/sign-in-alt.svg',
    expanded: false
  },

  {
    title: ' Designation History',
    icon: '../../../assets/img/file-alt.svg',
    expanded: false
  },
  {
    title: 'Term History',
    icon: '../../../assets/img/file-alt.svg',
    expanded: false
  },
  {
    title: 'Qualification Information',
    icon: '../../../assets/img/address-book.svg',
    expanded: false
  },
  ];
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shareService: ShardServiceService,
    private employeeService: EmployeeService,

  ) {

  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.employeeID = params["id"];
      this.getEmployeeDetail(this.employeeID);
    });
  }
  expandItem(indx): void {
    if (this.items[indx].expanded) {
      this.items[indx].expanded = false;
    } else {
      this.items.map(listItem => {
        if (this.items[indx] == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  getEmployeeDetail(id) {
    this.shareService.present();
    this.subscription = this.employeeService.EmployeeDetailByEmployeeId(id).subscribe(resp => {
      this.shareService.dismiss();
      this.employeeDetail = resp;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}


