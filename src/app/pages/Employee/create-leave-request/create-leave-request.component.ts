import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as uuid from 'uuid';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-leave-request',
  templateUrl: './create-leave-request.component.html',
  styleUrls: ['./create-leave-request.component.scss']
})
export class CreateLeaveRequestComponent implements OnInit {

  employees: Array<any> = [];
  leave_types: Array<any> = [];
  uploadExtensions: Array<any> = [];
  uploadedFileList: Array<any> = [];
  requestLeaveForm : FormGroup;
  uploadToken : any;

  constructor(
    private authService:AuthenticationService,
    private formBuilder:FormBuilder,
    public navCtrl: NavController,
    ) { 
      debugger;

     this.requestLeaveForm =  this.formBuilder.group({
      employeeId : [null , Validators.required],
      leaveTypeId : [null , Validators.required],
      startDate : [null , Validators.required],
      endDate : [null , Validators.required],
      reason : [null , Validators.required],
     })


      this.authService.leaveRequestPreRequisite().subscribe(resp =>{
         if(resp.status == "success"){
          this.employees   = resp.employees;
          this.leave_types = resp.leave_types;
         }
      })
      
      this.authService.uploadExtension().subscribe(resp =>{
          this.uploadExtensions   = resp;
      })
      
  }

  ngOnInit() {
    this.uploadToken =  uuid.v4();
  }

  uploadFile(file){
    debugger;
 
    let files = file.files[0] 
    var fileType = files.type;
    let fileExtension = fileType.split('/')[1];

    if (!this.uploadExtensions.includes(fileExtension)) {
      return;
    }
   
    const  formdata = new FormData();
    formdata.append("file", files); 
    formdata.append("token", this.uploadToken); 
    formdata.append("module", "leave_request"); 
    
    this.authService.uploadFileInEmployeeLeaveRequest(formdata).subscribe(resp=>{
       if(resp.status == "success"){
         this.uploadedFileList.push(resp.upload);
         alert(resp.message);
       }     
    })
    

  }

  submitLeaveRequest(){
    debugger;
   
    let data2 =  {
      employee_id: this.requestLeaveForm.get('employeeId').value,
      employee_leave_type_id: this.requestLeaveForm.get('leaveTypeId').value,
      start_date: this.requestLeaveForm.get('startDate').value+'T15:13:00.000Z',
      end_date: this.requestLeaveForm.get('endDate').value+'T15:13:00.000Z',
      reason: this.requestLeaveForm.get('reason').value,
      upload_token: this.uploadToken
    } 

    // let data = {
    //   employee_id: 27,
    //   employee_leave_type_id: 1,
    //   end_date: "2020-07-08T12:48:00.000Z",
    //   reason: "Testing",
    //   start_date: "2020-07-08T12:48:00.000Z",
    //   upload_token: "4e1ba7a4-4281-4060-895a-47a00da14723"
    // } 

    this.authService.createEmployeeLeaveRequest(data2).subscribe(resp =>{
        if(resp.status == "success" ){
          alert(resp.message);
          this.navCtrl.navigateRoot('/home-results');

        }

    }, 
    error =>{
      debugger;
      alert(error.error.errors.message[0]);
    })
  }

  fileSelect(files){
    files.click();
  }

  removeUploadedFile(file){
    debugger;
    let id = file.id;
    let data = {
      module_id: "",
      token: file.upload_token
    }  
    this.authService.removeFileUploadInEmployeeLeave(id, data).subscribe(resp=>{
      if(resp.status == "success"){
        alert(resp.message);
        
        let index =  this.uploadedFileList.findIndex( x => x.id == id );
        if(index != -1){
          this.uploadedFileList.splice(index,1);
        }

      }     
   })
  }

}
