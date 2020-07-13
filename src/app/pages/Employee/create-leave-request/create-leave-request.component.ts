import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as uuid from 'uuid';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { EmployeeService } from 'src/app/services/employeeservice/employee.service';
import { Subscription } from 'rxjs';

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
  requestLeaveForm: FormGroup;
  uploadToken: any;
  subscription: Subscription;
  leaveAllocationError: boolean = false;
  leaveAllocationErrorMsg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private shareService: ShardServiceService,
    private employeeService: EmployeeService,
  ) {
    this.requestLeaveForm = this.formBuilder.group({
      employeeId: [null, Validators.required],
      leaveTypeId: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      reason: [null, Validators.required],
    })


   this.subscription = this.employeeService.leaveRequestPreRequisite().subscribe(resp => {
      if (resp.status == "success") {
        this.employees = resp.employees;
        this.leave_types = resp.leave_types;
      }
    }, error => {
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })

    this.subscription =  this.employeeService.uploadExtension().subscribe(resp => {
      this.uploadExtensions = resp;
    }, error => {
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })

  }

  ngOnInit() {
    this.uploadToken = uuid.v4();
  }

  uploadFile(file) {

    let files = file.files[0]
    var fileType = files.type;
    let fileExtension = fileType.split('/')[1];

    if (!this.uploadExtensions.includes(fileExtension)) {
      return;
    }

    const formdata = new FormData();
    formdata.append("file", files);
    formdata.append("token", this.uploadToken);
    formdata.append("module", "leave_request");

    this.shareService.present();
    this.subscription = this.employeeService.uploadFileInEmployeeLeaveRequest(formdata).subscribe(resp => {
      this.shareService.dismiss();
      if (resp.status == "success") {
        this.uploadedFileList.push(resp.upload);
        this.shareService.openToast(resp.message, "success");
      }
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })


  }

  submitLeaveRequest() {
    let data2 = {
      employee_id: this.requestLeaveForm.get('employeeId').value,
      employee_leave_type_id: this.requestLeaveForm.get('leaveTypeId').value,
      start_date: this.requestLeaveForm.get('startDate').value + 'T15:13:00.000Z',
      end_date: this.requestLeaveForm.get('endDate').value + 'T15:13:00.000Z',
      reason: this.requestLeaveForm.get('reason').value,
      upload_token: this.uploadToken
    }
    this.shareService.present();
    this.subscription = this.employeeService.createEmployeeLeaveRequest(data2).subscribe(resp => {
      this.shareService.dismiss();
      this.leaveAllocationError = false;
      this.leaveAllocationErrorMsg = '';
      if (resp.status == "success") {
        this.shareService.openToast(resp.message, "success");
        this.navCtrl.navigateRoot('/home-results');
      }
    }, error => {
      this.shareService.dismiss();
      // this.shareService.openToast(error.error.errors.message[0], "danger");
      this.leaveAllocationError = true;
      this.leaveAllocationErrorMsg = error.error.errors.message[0];
    })
  }

  fileSelect(files) {
    files.click();
  }

  removeUploadedFile(file) {
    let id = file.id;
    let data = {
      module_id: "",
      token: file.upload_token
    }
    this.shareService.present();
    this.subscription = this.employeeService.removeFileUploadInEmployeeLeave(id, data).subscribe(resp => {
      this.shareService.dismiss();
      if (resp.status == "success") {
        this.shareService.openToast(resp.message, "success");
        let index = this.uploadedFileList.findIndex(x => x.id == id);
        if (index != -1) {
          this.uploadedFileList.splice(index, 1);
        }

      }
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })
  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }

}
