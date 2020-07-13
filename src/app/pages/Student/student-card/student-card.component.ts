import { Component, OnInit, ViewChild } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { StudentService } from 'src/app/services/studentservice/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  students: Array<any> = [];
  studentRecords: Array<any> = [];
  filters: any;
  batchList: any[] = [];
  last_page: number = 1;
  currentPageno: number = 1;
  batchIds: any = '';
  scrollApplied: boolean = false;
  getResponse: boolean = false;
  subscription: Subscription;

  constructor(
    private sharedservice: ShardServiceService,
    public navCtrl: NavController,
    private authService: AuthenticationService,
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.loadStudentList()
  }

  Calltonum(mobileNo: any) {
    this.sharedservice.SOSCAll(mobileNo);
  }

  doProfile(uuid) {

    this.navCtrl.navigateForward('student-profile/' + uuid);
  }

  loadStudentList(batchIds = '', pageNo = 1) {

    this.getResponse = false;
    this.sharedservice.present();
    this.subscription = this.studentService.StudentList(batchIds, pageNo).subscribe(resp => {
      this.sharedservice.dismiss();
      if (resp.status == "success") {
        this.getResponse = true;

        this.filters = resp.filters;
        this.batchList = [];

        this.filters.batches.forEach(x => {
          this.batchList = [...this.batchList, ...x.batches]
        });
        this.students = [...this.students, ...resp.student_records.data];
        this.studentRecords = resp.student_records;
        this.last_page = resp.student_records.last_page;
      }
    })
  }

  changeCourse(event) {
    this.infiniteScroll.disabled = false;
    this.currentPageno = 1;
    this.students = [];
    this.batchIds = (event.detail.value).toString();
    this.loadStudentList(this.batchIds, 1);
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      ++this.currentPageno;

      if (this.last_page >= this.currentPageno) {
        this.loadStudentList(this.batchIds, this.currentPageno);
      }
      else {
        event.target.disabled = true;
      }
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
