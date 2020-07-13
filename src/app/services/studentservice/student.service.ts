import { Injectable } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private dataService: DataService, 
    private router: Router,
    public navCtrl: NavController,
  ) { }

  StudentList(batchIds='', pageNo=1){
    return <Observable<any>> this.dataService.getData(`student?page=${pageNo}&sort_by=first_name&order=asc&batch_id=${batchIds}&blood_group_id=&religion_id=&caste_id=&gender=&category_id=&student_group_id=&columns=father_name,date_of_admission,admission_number,contact_number&page_length=12`);
   }
  
   studentDetailByStudentId(id){
    return <Observable<any>> this.dataService.getData(`student/${id}`);
   }
   
   studentAttendancePreRequisite(){
    return <Observable<any>> this.dataService.getData(`student/attendance/pre-requisite`);
   }
  
   getStudentAttendance(data){
    return <Observable<any>> this.dataService.postData('student/attendance/fetch', data);
   }
   
   changeStudentAttendance(data){
    return <Observable<any>> this.dataService.postData('student/attendance', data);
   }
}
