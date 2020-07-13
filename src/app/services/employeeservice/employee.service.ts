import { Injectable } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private dataService: DataService, 
    private router: Router,
    public navCtrl: NavController,
  ) { }

  EmployeeList(first_name='' ,middle_name='',last_name='', departmentIds='',designationIds='',employeeGroupIds='',status='active', pageNo=1){
    let first_name_string: string  = '';
    let middle_name_string: string = '';
    let last_name_string: string   = '';
    
    first_name != '' ? first_name_string = `&first_name=${first_name}` : first_name_string= ''; 
    middle_name != '' ? middle_name_string = `&middle_name=${middle_name}` : middle_name_string= ''; 
    last_name != '' ? last_name_string = `&last_name=${last_name}` : last_name_string= ''; 
    
    return <Observable<any>> this.dataService.getData(`employee?page=${pageNo}&sort_by=first_name&order=asc&page_length=12&department_id=${departmentIds}&designation_id=${designationIds}&employee_group_id=${employeeGroupIds}&status=${status}${first_name_string}${middle_name_string}${last_name_string}`);
   }
    
  EmployeeDetailByEmployeeId(id){
    return <Observable<any>> this.dataService.getData(`employee/${id}`);
   }
   
   leaveRequestPreRequisite(){
    return <Observable<any>> this.dataService.getData(`employee/leave/request/pre-requisite`);
   }
   
   uploadExtension(){
    return <Observable<any>> this.dataService.postData('upload/extension', {module: "leave_request"});
   }
  
   employeeLeaveAllocationById(data){
    return <Observable<any>> this.dataService.postData('employee/leave/allocation/fetch', data);
   }
   
   uploadFileInEmployeeLeaveRequest(data){
    return <Observable<any>> this.dataService.postFormData('upload', data);
   }
 
   removeFileUploadInEmployeeLeave(id,data){
    return <Observable<any>> this.dataService.postFormData('upload/'+id, data);
   }
   
   createEmployeeLeaveRequest(data){
    return <Observable<any>> this.dataService.postData('employee/leave/request', data);
   }
   
   EmployeeLeaveRequestList(filterEmployeeIds, filterLeaveTypeIds, pageNo){
    return <Observable<any>> this.dataService.getData(`employee/leave/request?page=${pageNo}&sort_by=created_at&order=desc&employee_id=${filterEmployeeIds}&leave_type_id=${filterLeaveTypeIds}&page_length=10`);
   }
   
}
