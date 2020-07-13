import { Component, OnInit } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { AcademicService } from 'src/app/services/academicservice/academic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject-teacher',
  templateUrl: './subject-teacher.component.html',
  styleUrls: ['./subject-teacher.component.scss']
})
export class SubjectTeacherComponent implements OnInit {
  checked: Boolean = false;

  customPopoverOptions: any = {
    class: "popover-contentss"
  };
  batchList: Array<any> = [];
  subjectTeacherList: Array<any> = [];
  getResponse: boolean = false;

  subscription: Subscription;



  constructor(
    private shareService: ShardServiceService,
    private academicService: AcademicService,

  ) { }

  ngOnInit() {
    this.shareService.present();
    this.subscription = this.academicService.courseBatchList().subscribe(resp => {
      this.shareService.dismiss();
      if (resp.status == "success") {
        let batches: Array<any>;
        batches = resp.batches;
        batches.forEach(batch => {
          this.batchList = [...this.batchList, ...batch.batches];
        })
        console.log("this.batchList", this.batchList);
        this.subjectTeachersByBatchId(this.batchList[0].id)
      }
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    });
  }

  subjectTeachersByBatchId(batchId) {
    this.shareService.present();
    this.subscription = this.academicService.subjectTeachersByBatchId(batchId).subscribe(resp => {
      this.shareService.dismiss();
      this.subjectTeacherList = resp;
      this.getResponse = true;
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })
  }

  changeBatch(event) {
    this.getResponse = false;
    let batchId = event.detail.value;
    this.subjectTeachersByBatchId(batchId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
