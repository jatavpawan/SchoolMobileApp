import { Component, OnInit, ViewChild } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { AcademicService } from 'src/app/services/academicservice/academic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  checked: Boolean = false;
  customPopoverOptions: any = {
    class: "popover-contentss"
  };
  timeTableList: any = [];
  filter: any[] = [];
  getResponse: boolean = false;
  batchIds: string = '';
  effectiveDate: string = '';
  last_page: number = 1;
  currentPageno: number = 1;
  subscription: Subscription;


  constructor(
    private shareService: ShardServiceService,
    private academicService: AcademicService,
  ) { }

  ngOnInit() {
    this.loadTimeTableList(this.batchIds, this.effectiveDate, 1);
  }

  loadTimeTableList(batchIds, dateEffective, pageNo = 1) {
    this.getResponse = false;
    // this.shareService.present();
    this.shareService.present();

    this.subscription = this.academicService.getTimeTableList(batchIds, dateEffective, pageNo).subscribe(resp => {
      // this.shareService.dismiss();
      this.shareService.dismiss();

      if (resp.status == "success") {
        this.getResponse = true;

        this.timeTableList = [...this.timeTableList, ...resp.timetables.data];
        this.last_page = resp.timetables.last_page;
        let batches: any[] = resp.filters.batches;

        batches.forEach(item => {
          this.filter = [...this.filter, ...item.batches];
        })

      }
    })
  }


  changeBatch(event) {
    this.filter = [];
    this.getResponse = false;
    this.batchIds = (event.detail.value).toString();
    this.loadTimeTableList(this.batchIds, this.effectiveDate, 1);
  }

  changeDateEffective(event) {
    this.filter = [];
    this.infiniteScroll.disabled = false;
    this.currentPageno = 1;
    this.timeTableList = [];
    this.getResponse = false;
    this.effectiveDate = (event.detail.value).toString();
    this.loadTimeTableList(this.batchIds, this.effectiveDate, 1);

  }

  loadData(event) {
    console.log('Done');
    event.target.complete();
    ++this.currentPageno;

    if (this.last_page >= this.currentPageno) {
      this.loadTimeTableList(this.batchIds, this.effectiveDate, this.currentPageno)
    }
    else {
      event.target.disabled = true;
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
