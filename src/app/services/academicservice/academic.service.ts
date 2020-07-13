import { Injectable } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  constructor(
    private dataService: DataService, 
    private router: Router,
    public navCtrl: NavController,
  ) { }


  getTimeTableList(batchIds, dateEffective, pageNo){

    if(dateEffective !=  ''){
        return <Observable<any>> this.dataService.getData(`timetable?page=${pageNo}&sort_by=date_effective&order=desc&batch_id=${batchIds}&date_effective=${dateEffective}&show_session_name=true&show_session_timing=true&show_session_subject_name=true&show_session_teacher_name=true&page_length=10`);
    }
    else{
        return <Observable<any>> this.dataService.getData(`timetable?page=${pageNo}&sort_by=date_effective&order=desc&batch_id=${batchIds}&show_session_name=true&show_session_timing=true&show_session_subject_name=true&show_session_teacher_name=true&page_length=10`);
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
}
