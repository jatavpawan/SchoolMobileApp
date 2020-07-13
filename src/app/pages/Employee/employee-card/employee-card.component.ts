import { Component, OnInit, ViewChild } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { NavController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';
import { EmployeeService } from 'src/app/services/employeeservice/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  checked: Boolean = false;

  employees: Array<any> = [];
  employeeRecords: Array<any> = [];
  filters: any;
  designationList: any[] = [];
  last_page: number = 1;
  currentPageno: number = 1;
  batchIds: any = '';
  departmentIds: any = '';
  designationIds: any = '';
  employeeGroupIds: any = '';
  status: any = 'active';
  first_name: string = '';
  middle_name: string = '';
  last_name: string = '';
  getResponse: boolean = false;
  subscription: Subscription;




  constructor(
    private sharedservice: ShardServiceService,
    public navCtrl: NavController,
    private authService: AuthenticationService,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.loadEmployeeList()
  }

  Calltonum(mobileNo: any) {
    this.sharedservice.SOSCAll(mobileNo);
  }

  doProfile(uuid) {

    this.navCtrl.navigateForward('employee-profile/' + uuid);
  }

  loadEmployeeList(first_name = '', middle_name = '', last_name = '', departmentIds = '', designationIds = '', employeeGroupIds = '', status = 'active', pageNo = 1) {

    this.getResponse = false;
    this.sharedservice.present();
    this.subscription = this.employeeService.EmployeeList(first_name, middle_name, last_name, departmentIds, designationIds, employeeGroupIds, status, pageNo).subscribe(resp => {
      this.sharedservice.dismiss();
      if (resp.status == "success") {
        this.getResponse = true;

        this.filters = resp.filters;

        this.designationList = [];

        this.filters.designations.forEach(x => {
          this.designationList = [...this.designationList, ...x.designations]
        });


        this.employees = [...this.employees, ...resp.employees.data];
        this.employeeRecords = resp.employees;
        this.last_page = resp.employees.last_page;
      }
    })
  }

  changeDepartment(event) {
    this.departmentIds = (event.detail.value).toString();
  }
  changeDesignation(event) {
    this.designationIds = (event.detail.value).toString();
  }
  changeEmployeeGroup(event) {
    this.employeeGroupIds = (event.detail.value).toString();
  }
  changeStatus(event) {
    this.status = (event.detail.value).toString();
  }



  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      ++this.currentPageno;

      if (this.last_page >= this.currentPageno) {
        this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, this.currentPageno);
      }
      else {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  applyFilter() {
    this.checked = false;
    if (this.infiniteScroll.disabled) {
      this.infiniteScroll.disabled = false;

    }
    this.currentPageno = 1;
    this.employees = [];
    this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, this.currentPageno);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
