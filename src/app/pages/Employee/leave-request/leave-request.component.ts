import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';
import * as moment from 'moment';


@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  checked: Boolean = false;
  ctrl : any= [
    {  
      Subject:'Language (LAN)',
      CurrentSubjectTeacher :'Umar Goel',
      SubjectTeacherHistory:[{history:'(1) Umar Goel (SM0114) from 01-07-2019'},
      {history:'(2) Kabeer Raja (SM0110) from 01-04-2019 '}]
    },
    {  
      Subject:'Environment (ENV)',
      CurrentSubjectTeacher :'Umar Goel',
      SubjectTeacherHistory:[{history:'(1) Umar Goel (SM0114) from 01-07-2019'},
      {history:'(2) Kabeer Raja (SM0110) from 01-04-2019 '}]
    },
    {  
      Subject:'Rhymes (RHY)',
      CurrentSubjectTeacher :'Umar Goel',
      SubjectTeacherHistory:[{history:'(1) Umar Goel (SM0114) from 01-07-2019'},
      {history:'(2) Kabeer Raja (SM0110) from 01-04-2019 '}]
    },
    {  
      Subject:'Numbers (NUM)',
      CurrentSubjectTeacher :'Umar Goel',
      SubjectTeacherHistory:[{history:'(1) Umar Goel (SM0114) from 01-07-2019'},
      {history:'(2) Kabeer Raja (SM0110) from 01-04-2019 '}]
    },

 ]   

 
 customPopoverOptions: any = {  
  //header: 'Flower Name',  
  //subHeader: 'Select number of persons',  
  class:"popover-contentss"
 // message: 'Only select your favorite flower'  
};
  leaveRequestList: Array<any>= [];
  employeeFilter: Array<any>= [];
  leaveTypesFilter: Array<any>= [];
  getResponse: boolean =  false;
  filterEmployeeIds: string = '';
  filterLeaveTypeIds: string = '';

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.getLeaveRequestList('', '')
    
  }

  getLeaveRequestList(filterEmployeeIds, filterLeaveTypeIds){
    this.authService.EmployeeLeaveRequestList(filterEmployeeIds, filterLeaveTypeIds).subscribe(resp=>{
      // debugger;
      if(resp.status == "success"){
        this.getResponse = true; 
        let filters: any; 
        filters = resp.filters;
        this.employeeFilter = filters.employees; 
        this.leaveTypesFilter = filters.leave_types; 

        this.leaveRequestList =  resp.leave_requests.data;

        let newleaveRequestList =  resp.leave_requests.data.map ( leave =>{
          // let date3 = moment(leave.start_date).format('YYYY MM DD');
          let date1 = moment(leave.start_date);
          let date2 = moment(leave.end_date);
          let diff = date2.diff(date1, 'days');    
          
          leave.leaveCount = diff+1;
          return leave;
             
        });
        this.leaveRequestList =  newleaveRequestList;
      }
    });
  }


  applyEmployeeFilter(event){
    // debugger;
    this.getResponse =  false;
    this.filterEmployeeIds = (event.detail.value).toString();
    this.getLeaveRequestList(this.filterEmployeeIds , this.filterLeaveTypeIds);
  }

  applyLeaveTypeFilter(event){
    // debugger;
    this.getResponse =  false;
    this.filterLeaveTypeIds = (event.detail.value).toString();
    this.getLeaveRequestList(this.filterEmployeeIds , this.filterLeaveTypeIds);

  }

}