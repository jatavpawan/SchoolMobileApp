import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
