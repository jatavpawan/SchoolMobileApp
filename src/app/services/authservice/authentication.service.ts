import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../dataservice/data.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private dataService: DataService, 
    private router: Router,
    public navCtrl: NavController,
  ) { }

  setUserdata(userdata) {
     localStorage.setItem("LoggedInUser", JSON.stringify (userdata))
   }
   getUserdata() {
     return  localStorage.getItem("LoggedInUser");
   }

  setToken(token: string) {
     localStorage.setItem("id_token", token);
   }
   getToken() {
     return  localStorage.getItem("id_token");
   }

   isLoggedIn() {
     return this.getUserdata() !== null;
   }
   logout() {
     localStorage.removeItem("LoggedInUser");
     localStorage.removeItem("id_token");
     this.navCtrl.navigateRoot('/');
   }

   loginUser(data){
      return <Observable<any>> this.dataService.postData('auth/login', data);
    }
    
    getTimeTableList(batchIds, dateEffective){

        if(dateEffective !=  ''){
            return <Observable<any>> this.dataService.getData(`timetable?page=1&sort_by=date_effective&order=desc&batch_id=${batchIds}&date_effective=${dateEffective}&show_session_name=true&show_session_timing=true&show_session_subject_name=true&show_session_teacher_name=true&page_length=10`);
        }
        else{
            return <Observable<any>> this.dataService.getData(`timetable?page=1&sort_by=date_effective&order=desc&batch_id=${batchIds}&show_session_name=true&show_session_timing=true&show_session_subject_name=true&show_session_teacher_name=true&page_length=10`);
        }

   }

   

   getClassTeacherList(course_id = ''){
    return <Observable<any>> this.dataService.getData(`class/teacher?options=1&course_id=${course_id}&show_history=true`);
   }
   
   courseBatchList(){
    return <Observable<any>> this.dataService.getData(`subject/teacher`);
   }

   subjectTeachersByBatchId(batchId){
    return <Observable<any>> this.dataService.postData(`subject/teacher/${batchId}`, null);
   }
   
   StudentList(batchIds='', pageNo=1){
    return <Observable<any>> this.dataService.getData(`student?page=${pageNo}&sort_by=first_name&order=asc&batch_id=${batchIds}&blood_group_id=&religion_id=&caste_id=&gender=&category_id=&student_group_id=&columns=father_name,date_of_admission,admission_number,contact_number&page_length=12`);
   }
  
   studentDetailByStudentId(id){
    return <Observable<any>> this.dataService.getData(`student/${id}`);
   }
   
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
   
   EmployeeLeaveRequestList(filterEmployeeIds, filterLeaveTypeIds){
    return <Observable<any>> this.dataService.getData(`employee/leave/request?page=1&sort_by=created_at&order=desc&employee_id=${filterEmployeeIds}&leave_type_id=${filterLeaveTypeIds}&page_length=10`);
   }
   
    
}






