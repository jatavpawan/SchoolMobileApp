import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';

@Component({
  selector: 'app-class-teacher',
  templateUrl: './class-teacher.component.html',
  styleUrls: ['./class-teacher.component.scss']
})
export class ClassTeacherComponent implements OnInit {
  ctrl: any = [{
    course: 'Nursary', section: [{
      Section: 'Nursary Section A',
      CurrentSubjectTeacher: 'Naresh Sridhar (SM0113)',
      SubjectTeacherHistory: [{ history: '(1) Naresh Sridhar (SM0113) from 15-09-2019' },
      { history: '(2) Umar Goel (SM0114) from 01-07-2019' },{history:'(3) Kabeer Raja (SM0110) from 01-04-2019'}]
    },{
      Section: 'Nursary Section B',
      CurrentSubjectTeacher: 'Kabeer Raja (SM0110)',
      SubjectTeacherHistory: [{ history: '(1) Umar Goel (SM0114) from 01-07-2019' },
      { history: '(2) Kabeer Raja (SM0110) from 01-04-2019 ' }]
    }]
  },{
    course: 'LKG', section:[ {
      Section: 'LKG Section A',
      CurrentSubjectTeacher: 'Kabeer Raja (SM0110)',
      SubjectTeacherHistory: [{ history: '(1) Umar Goel (SM0114) from 01-07-2019' },
      { history: '(2) Kabeer Raja (SM0110) from 01-04-2019 ' }]
    },{
      Section: 'LKG Section B',
      CurrentSubjectTeacher: 'Umar Goel',
      SubjectTeacherHistory: [{ history: '(1) Umar Goel (SM0114) from 01-07-2019' },
      { history: '(2) Kabeer Raja (SM0110) from 01-04-2019 ' }]
    },{
      Section: 'LKG Section C',
      CurrentSubjectTeacher: 'Umar Goel',
      SubjectTeacherHistory: [{ history: '(1) Umar Goel (SM0114) from 01-07-2019' },
      { history: '(2) Kabeer Raja (SM0110) from 01-04-2019 ' }]
    }]
  }
 

  ]


  customPopoverOptions: any = {
    //header: 'Flower Name',  
    //subHeader: 'Select number of persons',  
    class: "popover-contentss"
    // message: 'Only select your favorite flower'  
  };
  teacherList: Array<any> = [];
  courseList: Array<any> = [];
  courses: Array<any> = [];
  courseGroups: Array<any> = [];
  batchList: Array<any>=[] ;
  courseBatchList: Array<any> = [];
  courseGroupsWithTeacher: Array<any> = [];
  batchListArr: any[]= [];
  filterApply: boolean = false;
  tempFilterCourseGroup: any[]= [];
  constructor(
   private authService: AuthenticationService, 
  ) { }

  ngOnInit() {
    // this.authService.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvaW4uaW5zdGlraXQuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTkzNTg1NTU2LCJleHAiOjE1OTM2NzE5NTYsIm5iZiI6MTU5MzU4NTU1NiwianRpIjoiSTgzelBTWHFXS0VBc1JySyIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.fP2pffKc6UCc167GrjSfTZjAdX5ABhe0fZAeYjGgwbY")
    this.getClassTeacherList();
  }

  getClassTeacherList(courseId = ''){
    // // debugger;
    this.authService.getClassTeacherList(courseId).subscribe(resp =>{
      if(resp.status == "success"){
        // // debugger;
      //  let courses: Array<any>; 
       this.courses = resp.courses;
       this.courses.forEach(course =>{
         this.courseList = [...this.courseList , ...course.courses];
       })

       this.courseGroups = resp.course_groups;
       this.batchList = resp.batches;
       this.batchListArr =  this.batchList.filter( batch => batch.course_id >= 1 ).sort( (a,b) => a.course_id - b.course_id);;
       console.log("batchArr", this.batchListArr);
      // // debugger;
       this.courseGroups.forEach(group=>{
       
          group.courses.forEach(course =>{

            course.batches.forEach(batch =>{
              let item = this.batchListArr.find( x => x.course_id == batch.course_id  && x.name == batch.name);
              batch.batch_detail = item;
            })
          })
       })

       console.log("this.courseGroups", this.courseGroups);
      }
    })
  } 

  

  changeCourse(event){
    // // debugger;
  //  let courseId = (event.detail.value).toString();
   let courseId = (event.detail.value);
   if(this.filterApply == false) 
    {
       let temp = JSON.stringify(this.courseGroups);
       this.tempFilterCourseGroup = JSON.parse(temp);
    } 
    else{
       this.courseGroups =  JSON.parse(JSON.stringify(this.tempFilterCourseGroup));
    }
    this.filterApply = true; 
  //  this.getClassTeacherList(courseId);
  // let filterCourse: Array<any> = [];
  // this.courses.forEach(item => {
  //   let obj= { "course_group": "",courses: [] };
  //   obj.course_group = item.course_group;
  //   let courses: Array<any> = item.courses.filter(course => courseId.includes(course.id) )
  //   //  && filterCourse = [ ...filterCourse  , ...obj.courses = [...courses]] )  ; 
    
  //   if(courses.length !=0){
  //     obj.courses = [...obj.courses , ...courses];
  //     filterCourse.push(obj);
  //   }

  //   })

    // let filterCourseGroup : Array<any> = this.courses.filter(x => x.courses.findIndex(z => courseId.includes(z.id)) !=-1 );
    // let filterCourseList: Array<any> = filterCourseGroup.map(x=>{
    //    x.courses= x.courses.filter(z => courseId.includes(z.id)) 
    //      return x;
    // });


    // filterCourse.splice(0,1);
    // console.log("filterCourse",filterCourse);
    // let filtercourseGroups: Array<any> = this.courseGroups.filter(x => filterCourseList.findIndex(z => z.course_group == x.name) != -1 )
    // this.courseGroups = this.filtercourseGroups.filter(x => filterCourseList.findIndex(z => z.course_group == x.name) != -1 )
  //   this.courseGroups = filtercourseGroups.map(x=>{
  //     x.courses = x.courses.filter(z => courseId.includes(z.id)) 
  //       return x;
  //  });
    let filterCourse: Array<any> = this.courseGroups.map(x=>{
      x.courses = x.courses.filter(z => courseId.includes(z.id)) 
        return x;
   });

   this.courseGroups = filterCourse.filter(x => x.courses.length !=0 );
   console.log("this.filtercourseGroups", this.courseGroups);

  }



  


  
}


