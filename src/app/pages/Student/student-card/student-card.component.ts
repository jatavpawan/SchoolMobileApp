import { Component, OnInit, ViewChild } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  // ctrl: any = [
  //   {
  //     studentName: 'Jivan Kesav Shah',
  //     gender:'m',
  //     age:'#151 (9 Year 4 Month)',
  //     Class: 'Grade I',
  //     IsAlloted: true,
  //     gardian:"Keshav",
  //     gardianMobile:"8827439088"
  //   },
  //   {
  //     studentName: 'Munni Kalla',
  //     gender:'f',
  //     age:'#101 (10 Year 10 Month)',
  //     Class: 'Grade IV',
  //     IsAlloted: true,
  //     gardian:"Javed Kalla",
  //     gardianMobile:"987504321"
  //   },
  //   {
  //     studentName: 'Aslam Bajwa',
  //     gender:'m',
  //     age:'#104 (7 Year 4 Month)',
  //     Class: 'UKG',
  //     IsAlloted: false,
  //     gardian:"Anand Bajwa",
  //     gardianMobile:"8827439088"
  //   },
  //   {
  //     studentName: 'Bhagvati Jain',
  //     gender:'f',
  //     age:'#112 (3 Year 4 Month)',
  //     Class: 'Grade II',
  //     IsAlloted: true,
  //     gardian:"Tejram",
  //     gardianMobile:"7688765678"
  //   },
  
 

  // ]
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  students: Array<any> = [];
  studentRecords: Array<any> = [];
  filters: any;
  batchList: any[] = [];
  last_page: number = 1;
  currentPageno: number=1;
  batchIds: any= '';
  scrollApplied:boolean = false;
  getResponse: boolean =  false;
  
  constructor(
    private sharedservice:ShardServiceService,
    public navCtrl: NavController,
    private authService:AuthenticationService
  ) { }

  ngOnInit() {
    this.loadStudentList()
  }

  Calltonum(mobileNo:any){
    this.sharedservice.SOSCAll(mobileNo);
  }

  doProfile(uuid){

this.navCtrl.navigateForward('student-profile/'+uuid);
  }

  loadStudentList(batchIds = '', pageNo =1){
    debugger;
    
  
  this.getResponse =  false;
    this.authService.StudentList(batchIds, pageNo).subscribe(resp =>{
      if(resp.status== "success"){
        this.getResponse = true;   

          this.filters = resp.filters;
          this.batchList= [];

          this.filters.batches.forEach(x =>{
            this.batchList= [...this.batchList, ...x.batches]
          });
          this.students =[...this.students, ...resp.student_records.data] ;
          this.studentRecords = resp.student_records;
          this.last_page = resp.student_records.last_page;
        }
    })
  }

  changeCourse(event){
    debugger;
    this.infiniteScroll.disabled = false;
    this.currentPageno =1;
    this.students = [];
    this.batchIds = (event.detail.value).toString();
  //  let batchIds = (event.detail.value);
    this.loadStudentList(this.batchIds,1);

  }

 

  loadData(event) {
    debugger;
    // this.currentPageno = 2; 
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      ++this.currentPageno;

      // this.data = [...this.data, ...this.data];
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (this.data.length == 1000) {
      //   event.target.disabled = true;
      // }
      if(this.last_page >= this.currentPageno){
        // this.currentPageno++;  
        // this.scrollApplied = true
        this.loadStudentList(this.batchIds, this.currentPageno);
      }
      else{
        event.target.disabled = true;
      }
      //  this.last_page >= this.currentPageno && this.currentPageno++  &&  this.loadStudentList(this.batchIds, this.currentPageno);

    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
