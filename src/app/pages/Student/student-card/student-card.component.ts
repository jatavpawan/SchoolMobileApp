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
  // data  =
  // [{
  //   "name": "Aline Grover",
  //   "created": "November 28, 2012"
  // }, {
  //   "name": "Nevada Anders",
  //   "created": "January 18, 2014"
  // }, {
  //   "name": "Nicholas Morissette",
  //   "created": "November 11, 2014"
  // }, {
  //   "name": "Rusty Umland",
  //   "created": "January 8, 2019"
  // }, {
  //   "name": "Amada Cerulli",
  //   "created": "July 22, 2009"
  // }, {
  //   "name": "Harriette Garcia",
  //   "created": "July 29, 2018"
  // }, {
  //   "name": "Erminia Marotz",
  //   "created": "September 29, 2016"
  // }, {
  //   "name": "Shanelle Parodi",
  //   "created": "May 26, 2018"
  // }, {
  //   "name": "Roger Leite",
  //   "created": "August 6, 2015"
  // }, {
  //   "name": "Latina Faulcon",
  //   "created": "February 5, 2014"
  // }, {
  //   "name": "Jerrie Hoekstra",
  //   "created": "June 2, 2016"
  // }, {
  //   "name": "Domonique Byam",
  //   "created": "December 30, 2010"
  // }, {
  //   "name": "Monnie Bonar",
  //   "created": "December 20, 2018"
  // }, {
  //   "name": "Chu Kahle",
  //   "created": "November 17, 2017"
  // }, {
  //   "name": "Allan Passman",
  //   "created": "November 12, 2015"
  // }, {
  //   "name": "Conrad Caliendo",
  //   "created": "February 10, 2016"
  // }, {
  //   "name": "Elma Chenier",
  //   "created": "August 13, 2011"
  // }, {
  //   "name": "Wendi Hirano",
  //   "created": "July 27, 2018"
  // }, {
  //   "name": "Loren Wordlaw",
  //   "created": "December 20, 2014"
  // }, {
  //   "name": "Hubert Frum",
  //   "created": "January 21, 2013"
  // }, {
  //   "name": "Rueben Basil",
  //   "created": "December 2, 2013"
  // }, {
  //   "name": "Krystyna Hardiman",
  //   "created": "February 11, 2016"
  // }, {
  //   "name": "Micki Murch",
  //   "created": "December 17, 2009"
  // }, {
  //   "name": "Allene Knight",
  //   "created": "November 3, 2010"
  // }, {
  //   "name": "Davis Lunsford",
  //   "created": "October 17, 2011"
  // }, {
  //   "name": "Elin Conte",
  //   "created": "June 23, 2015"
  // }, {
  //   "name": "Yasuko Hites",
  //   "created": "August 25, 2017"
  // }, {
  //   "name": "Gerri Pinon",
  //   "created": "May 21, 2014"
  // }, {
  //   "name": "Caryl Hawker",
  //   "created": "April 13, 2018"
  // }, {
  //   "name": "Savannah Hoard",
  //   "created": "October 31, 2009"
  // }, {
  //   "name": "Carolyn Knutsen",
  //   "created": "July 16, 2015"
  // }, {
  //   "name": "Shantay Mckissack",
  //   "created": "July 9, 2010"
  // }, {
  //   "name": "Vertie Pinales",
  //   "created": "November 20, 2010"
  // }, {
  //   "name": "Gidget Stuck",
  //   "created": "August 17, 2017"
  // }, {
  //   "name": "Drew Crownover",
  //   "created": "August 30, 2017"
  // }, {
  //   "name": "Vashti Krajewski",
  //   "created": "January 25, 2018"
  // }, {
  //   "name": "Candice Dike",
  //   "created": "November 19, 2018"
  // }, {
  //   "name": "Dorthey Buhler",
  //   "created": "October 22, 2012"
  // }, {
  //   "name": "Hailey Deluna",
  //   "created": "September 13, 2012"
  // }, {
  //   "name": "Richard Aaron",
  //   "created": "April 27, 2016"
  // }]; 
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
    this.authService.StudentList(batchIds, pageNo).subscribe(resp =>{
        if(resp.status== "success"){
          this.filters = resp.filters;
          this.batchList= [];

          this.filters.batches.forEach(x =>{
            this.batchList= [...this.batchList, ...x.batches]
          });
          this.students =[...this.students, ...resp.student_records.data] ;
          this.studentRecords = resp.student_records;
          this.last_page = resp.student_records.last_page;
          // if(this.scrollApplied == true){
          //   ++this.currentPageno;
          //   this.scrollApplied = false;
          // }
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
