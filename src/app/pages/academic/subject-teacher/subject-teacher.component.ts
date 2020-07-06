import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';

@Component({
  selector: 'app-subject-teacher',
  templateUrl: './subject-teacher.component.html',
  styleUrls: ['./subject-teacher.component.scss']
})
export class SubjectTeacherComponent implements OnInit {
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
  batchList: Array<any>= [];
  subjectTeacherList: Array<any>= [];
  getResponse: boolean =  false;

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    // // debugger;
    this.authService.courseBatchList().subscribe(resp=>{
      if(resp.status == "success"){
        let batches: Array<any>; 
        batches = resp.batches;
        batches.forEach(batch =>{
          this.batchList = [...this.batchList , ...batch.batches];
        })
        console.log("this.batchList", this.batchList);
        this.subjectTeachersByBatchId(this.batchList[0].id)
      }
    });
  }

  subjectTeachersByBatchId(batchId){
    // // debugger;
    this.authService.subjectTeachersByBatchId(batchId).subscribe(resp =>{
        this.subjectTeacherList =  resp;
        this.getResponse = true; 
    })
  }

  changeBatch(event){
    // // debugger;
    this.getResponse =  false;
   let batchId = event.detail.value;
   this.subjectTeachersByBatchId(batchId);
  }

}
