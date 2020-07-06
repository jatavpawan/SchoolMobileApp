import { Component, OnInit, ViewChild } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { NavController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  checked: Boolean = false;
  ctrl: any = [
    {
      employeeName: 'Aarif Arora',
      empCode: 'SM0108',
      gender: 'm',
      age: '(23 Year 7 Month)',
      Class: 'Academic Department Nursery Trained Teacher (Teaching Staff)',
      IsAlloted: true,
      gardian: "since 30-04-2018 ",
      gardianMobile: "8827439088"
    }, {
      employeeName: 'Devki Chand',
      empCode: 'SM0112',
      gender: 'f',
      age: '(25 Year 7 Month)',
      Class: 'Academic Department Primary Teacher (Teaching Staff)',
      IsAlloted: true,
      gardian: "since 28-02-2019 ",
      gardianMobile: "984321568"
    },
    {
      employeeName: 'Vivek Rai',
      empCode: 'SM0308',
      gender: 'm',
      age: '(28 Year 5 Month)',
      Class: 'Academic Department Trained Graduate Teacher (Teaching Staff)',
      IsAlloted: true,
      gardian: "since 22-06-2020 ",
      gardianMobile: "9876543215"
    },
    {
      employeeName: 'Ramakant Rai',
      empCode: 'SM0368',
      gender: 'm',
      age: '(21 Year 9 Month)',
      Class: 'Other Librarian (Library Staff)',
      IsAlloted: true,
      gardian: "since 23-08-2019 ",
      gardianMobile: "9876543215"
    },



  ]
  employees: Array<any> = [];
  employeeRecords: Array<any> = [];
  filters: any;
  designationList: any[] = [];
  // designationList: any[] = [];
  // designationList: any[] = [];
  last_page: number = 1;
  currentPageno: number = 1;
  batchIds: any = '';
  scrollApplied: boolean = false;
  departmentIds: any = '';
  designationIds: any = '';
  employeeGroupIds: any = '';
  status: any = 'active';
  // employeeFormGroup: FormGroup;
  first_name: string = '';
  middle_name: string = '';
  last_name: string = '';
  getResponse: boolean = false;



  constructor(
    private sharedservice: ShardServiceService,
    public navCtrl: NavController,
    private authService: AuthenticationService,
    // private formBuilder: FormBuilder,

  ) {
    // this.employeeFormGroup = this.formBuilder.group({
    //   firstName : [''],
    //   middleName : [''],
    //   lastName : [''],
    // })


  }

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
    // loadEmployeeList() {
    // debugger;

    this.getResponse = false;
    this.authService.EmployeeList(first_name, middle_name, last_name, departmentIds, designationIds, employeeGroupIds, status, pageNo).subscribe(resp => {
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
    // debugger;
    // this.infiniteScroll.disabled = false;
    // this.currentPageno = 1;
    // this.employees = [];
    this.departmentIds = (event.detail.value).toString();
    //  let batchIds = (event.detail.value);
    // this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, 1);
    // this.loadEmployeeList();

  }
  changeDesignation(event) {
    // debugger;
    // this.infiniteScroll.disabled = false;
    // this.currentPageno = 1;
    // this.employees = [];
    this.designationIds = (event.detail.value).toString();
    //  let batchIds = (event.detail.value);
    // this.loadEmployeeList(this.batchIds,1);
    // this.loadEmployeeList();
    // this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, 1);


  }
  changeEmployeeGroup(event) {
    // debugger;
    // this.infiniteScroll.disabled = false;
    // this.currentPageno = 1;
    // this.employees = [];
    this.employeeGroupIds = (event.detail.value).toString();
    //  let batchIds = (event.detail.value);
    // this.loadEmployeeList(this.batchIds,1);
    // this.loadEmployeeList();
    // this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, 1);


  }
  changeStatus(event) {
    // debugger;
    // this.infiniteScroll.disabled = false;
    // this.currentPageno = 1;
    // this.employees = [];
    this.status = (event.detail.value).toString();
    //  let batchIds = (event.detail.value);
    // this.loadEmployeeList(this.batchIds,1);
    // this.loadEmployeeList();
    // this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, 1);


  }



  loadData(event) {
    // debugger;
    // this.currentPageno = 2; 
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      ++this.currentPageno;

      // this.data = [...this.data, ...this.data];
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (this.data.length == 1000) {
      //   event.target.disabled = true;
      // }
      if (this.last_page >= this.currentPageno) {
        // this.currentPageno++;  
        // this.scrollApplied = true
        // this.loadEmployeeList(this.batchIds, this.currentPageno);
        this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, this.currentPageno);
      }
      else {
        event.target.disabled = true;
      }
      //  this.last_page >= this.currentPageno && this.currentPageno++  &&  this.loadStudentList(this.batchIds, this.currentPageno);

    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  // changeInput() {
  //   this.infiniteScroll.disabled = false;
  //   this.currentPageno = 1;
  //   this.employees = [];
  //   this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, this.currentPageno);
  // }

  applyFilter(){
    this.checked = false;
    if(this.infiniteScroll.disabled)
    {
    this.infiniteScroll.disabled = false;

    }
    this.currentPageno = 1;
    this.employees = [];
    this.loadEmployeeList(this.first_name, this.middle_name, this.last_name, this.departmentIds, this.designationIds, this.employeeGroupIds, this.status, this.currentPageno);

  }

}
