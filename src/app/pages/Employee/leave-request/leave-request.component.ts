import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employeeservice/employee.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  checked: Boolean = false;

  customPopoverOptions: any = {
    class: "popover-contentss"
  };
  leaveRequestList: Array<any> = [];
  employeeFilter: Array<any> = [];
  leaveTypesFilter: Array<any> = [];
  getResponse: boolean = false;
  filterEmployeeIds: string = '';
  filterLeaveTypeIds: string = '';
  last_page: number = 1;
  currentPageno: number = 1;
  subscription: Subscription;

  constructor(
    private shareService: ShardServiceService,
    private employeeService: EmployeeService,

  ) { }

  ngOnInit() {
    this.getLeaveRequestList('', '', 1)

  }

  getLeaveRequestList(filterEmployeeIds, filterLeaveTypeIds, pageNo = 1) {
    this.getResponse = false;
    this.shareService.present();
    this.subscription = this.employeeService.EmployeeLeaveRequestList(filterEmployeeIds, filterLeaveTypeIds, pageNo).subscribe(resp => {
      this.shareService.dismiss();
      if (resp.status == "success") {
        this.getResponse = true;
        let filters: any;
        filters = resp.filters;
        this.employeeFilter = filters.employees;
        this.leaveTypesFilter = filters.leave_types;

        this.leaveRequestList = [...this.leaveRequestList, ...resp.leave_requests.data];
        this.last_page = resp.leave_requests.last_page;


        let newleaveRequestList = this.leaveRequestList.map(leave => {
          let date1 = moment(leave.start_date);
          let date2 = moment(leave.end_date);
          let diff = date2.diff(date1, 'days');

          leave.leaveCount = diff + 1;
          return leave;

        });
        this.leaveRequestList = newleaveRequestList;
      }
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    });
  }


  applyEmployeeFilter(event) {
    this.getResponse = false;
    this.filterEmployeeIds = (event.detail.value).toString();
  }

  applyLeaveTypeFilter(event) {
    this.getResponse = false;
    this.filterLeaveTypeIds = (event.detail.value).toString();
  }


  applyFilter() {
    this.checked = false;
    if (this.infiniteScroll.disabled) {
      this.infiniteScroll.disabled = false;

    }
    this.currentPageno = 1;
    this.leaveRequestList = [];
    this.getLeaveRequestList(this.filterEmployeeIds, this.filterLeaveTypeIds, 1);

  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      ++this.currentPageno;

      if (this.last_page >= this.currentPageno) {
        this.getLeaveRequestList(this.filterEmployeeIds, this.filterLeaveTypeIds, this.currentPageno);
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