import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { StudentService } from 'src/app/services/studentservice/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.scss']
})
export class StudentAttendenceComponent implements OnInit {

  checked: Boolean = true;

  customPopoverOptions: any = {
    class: "popover-contentss"
  };
  getResponse: boolean = false;
  filterEmployeeIds: string = '';
  filterLeaveTypeIds: string = '';
  initFlag: boolean = true;
  filterBatchList: Array<any> = [];
  filterAttendanceMethods: Array<any> = [];
  filterBatchId: number = 0;
  filterAttendanceMethod: string = '';
  filterSubject: string = '';
  filterAttendanceSession: string = '';
  attendance_method_more_than_once_types: Array<any> = [];
  subjectsInBatch: Array<any> = [];
  batch_with_subjects: Array<any> = [];
  filterDateOfAttendance: string = '';
  DateofAttendance: String;
  attendanceMethod: String = '';
  ctrl = [
    {
      name: "AiA",
      code: "AI101",
      limit: 25000,
      account: "Life Insurance"
    },
    {
      name: "Cargills",
      code: "CF001",
      limit: 30000,
      account: "Food City"
    }
  ]
  headers: Array<any> = [];
  student_data: Array<any> = [];
  mark = "fa fa-check";
  currentdate: number = 0;
  dateOfAttendanceISO: string;
  current_date_attendance: Array<any> = [];
  changeAttendanceFlag: boolean = false;
  subscription: Subscription;
  attendanceStatus: any = true;
  

  constructor(
    private shareService: ShardServiceService,
    private studentService: StudentService,

  ) {
    this.DateofAttendance = moment(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.filterDateOfAttendance = moment(new Date()).format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.studentAttendancePreRequisite();

  }

  studentAttendancePreRequisite() {
    this.shareService.present();
    this.subscription =  this.studentService.studentAttendancePreRequisite().subscribe(resp => {
      this.shareService.dismiss();
      if (resp.status == "success") {
        this.attendance_method_more_than_once_types = resp.attendance_method_more_than_once_types;
        this.batch_with_subjects = resp.batch_with_subjects;
        let batches = resp.batches;
        batches.forEach(batch => {
          this.filterBatchList = [...this.filterBatchList, ...batch.batches];
        });
        this.filterAttendanceMethods = resp.attendance_methods;
      }
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })
  }

  getStudenceAttendance() {
    let time = moment(new Date()).format('HH:mm:ss');
    let DateOfAttendance = moment(this.filterDateOfAttendance).subtract(1, "days").format("YYYY-MM-DD");
    this.dateOfAttendanceISO = DateOfAttendance + 'T' + time + '.000Z';
    this.currentdate = parseInt(moment(this.filterDateOfAttendance).format('DD'));
    // }

    let data = {
      attendance_method: this.filterAttendanceMethod,
      batch_id: Number(this.filterBatchId),
      date_of_attendance: this.dateOfAttendanceISO,
      session: this.filterAttendanceSession != '' ? Number(this.filterAttendanceSession) : this.filterAttendanceSession,
      subject_id: this.filterSubject != '' ? Number(this.filterSubject) : this.filterSubject
    }

    this.shareService.present();
    this.subscription = this.studentService.getStudentAttendance(data).subscribe(resp => {
      this.shareService.dismiss();
      if (resp.status == "success") {
        this.changeAttendanceFlag = false;
        this.getResponse = true;
        this.headers = resp.header;
        this.student_data = resp.student_data;
        this.current_date_attendance = resp.current_date_attendance;

      }
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })
  }

  changeAttendance() {
    let data = {
      attendance_method: this.filterAttendanceMethod,
      batch_id: this.filterBatchId,
      date_of_attendance: this.dateOfAttendanceISO,
      session: this.filterAttendanceSession,
      students: [{ id: 136, attendance: "unmarked" }, { id: 116, attendance: "unmarked" }],
      subject_id: this.filterSubject
    }

  }

  changeInBatch(event) {
    this.getResponse = false;
    this.filterBatchId = (event.detail.value).toString();
    this.filterAttendanceMethod == "once"
    this.attendanceMethod = this.filterAttendanceMethods != undefined && this.filterAttendanceMethods.length != 0 ? this.filterAttendanceMethods[0].value : '';
  }

  changeInAttendanceMethod(event) {
    this.getResponse = false;
    this.filterAttendanceMethod = (event.detail.value).toString();
    this.filterSubject = "";
    this.filterAttendanceSession = "";

    if (this.filterAttendanceMethod == "subject_wise") {
      let batch: any = this.batch_with_subjects.filter(batch => batch.id == this.filterBatchId);
      if (batch != undefined && batch.length != 0) {
        this.subjectsInBatch = batch[0].subjects;
      }
      else {
        this.shareService.openToast("select batch", "danger");
      }
    }

  }
  changeInSubject(event) {
    this.getResponse = false;
    this.filterSubject = (event.detail.value).toString();

  }
  changeInAttendanceSession(event) {
    this.getResponse = false;
    this.filterAttendanceSession = (event.detail.value).toString();

  }

  changeInDateOfAttendance(event) {
    this.getResponse = false;
    this.filterDateOfAttendance = (event.detail.value).toString();

  }

  applyFilter() {
    this.checked = false;
    this.initFlag = false;
    this.getStudenceAttendance();
  }

  MarkAllPresent() {
    this.student_data.forEach(data => {
      data.attendances[this.currentdate].label = 'present';
    })
  }
  MarkAllAbsent() {
    this.student_data.forEach(data => {
      data.attendances[this.currentdate].label = 'absent';
    })

  }

  changeAttendanceStatus(i, status) {
    debugger;
    this.student_data[i].attendances[this.currentdate].label = status;
  }

  saveAttendanceStatusChange() {
    let studentAttendancedata: Array<any> = this.student_data.map(data => {
      let attendence = {
        id: data.id,
        attendance: data.attendances[this.currentdate].label
      }

      return attendence;
    });

    studentAttendancedata.pop();
    let DateOfAttendance = moment(this.filterDateOfAttendance).subtract(1, "days").format("YYYY-MM-DD");
    let newdateOfAttendanceISO = DateOfAttendance + 'T18:30:00.000Z';


    let data = {
      attendance_method: this.filterAttendanceMethod,
      batch_id: Number(this.filterBatchId),
      date_of_attendance: newdateOfAttendanceISO,
      session: this.filterAttendanceSession != '' ? Number(this.filterAttendanceSession) : this.filterAttendanceSession,
      students: studentAttendancedata,
      subject_id: this.filterSubject != '' ? Number(this.filterSubject) : this.filterSubject
    }

    this.shareService.present();

    this.subscription = this.studentService.changeStudentAttendance(data).subscribe(resp => {
      this.shareService.dismiss();

      if (resp.status == "success") {
        this.changeAttendanceFlag = true;
        this.shareService.openToast(resp.message, "success");
        this.getStudenceAttendance();
      }
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
