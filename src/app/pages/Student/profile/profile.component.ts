import { Component, OnInit } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/studentservice/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  studentID: string = '';
  public items: any = [{
    title: 'Basic Information',
    icon: '../../../assets/img/graduation-cap.svg',
    expanded: false,

  },
  {
    title: 'Parent Information',
    icon: '../../../assets/img/group.svg',
    expanded: false,
  },
  {
    title: 'Contact Information',
    icon: '../../../assets/img/address-book.svg',
    expanded: false
  },
  {
    title: 'Sibling Information',
    icon: '../../../assets/img/people-carry.svg',
    expanded: false
  },
  {
    title: 'User Login',
    icon: '../../../assets/img/sign-in-alt.svg',
    expanded: false
  },
  {
    title: 'Fee History',
    icon: '../../../assets/img/coins.svg',
    expanded: false
  },
  {
    title: 'Exam Report',
    icon: '../../../assets/img/file-alt.svg',
    expanded: false
  },
  ];
  studentDetail: any;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shareService: ShardServiceService,
    private studentService: StudentService,
  ) { }

  ngOnInit() {

    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.studentID = params["id"];
      this.getStudentDetail(this.studentID);
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

  getStudentDetail(id) {
    this.shareService.present();
    this.subscription = this.studentService.studentDetailByStudentId(id).subscribe(resp => {
      this.shareService.dismiss();
      this.studentDetail = resp;
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


