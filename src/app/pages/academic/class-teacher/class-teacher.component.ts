import { Component, OnInit } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { AcademicService } from 'src/app/services/academicservice/academic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-class-teacher',
  templateUrl: './class-teacher.component.html',
  styleUrls: ['./class-teacher.component.scss']
})
export class ClassTeacherComponent implements OnInit {

  customPopoverOptions: any = {
    class: "popover-contentss"
  };
  teacherList: Array<any> = [];
  courseList: Array<any> = [];
  courses: Array<any> = [];
  courseGroups: Array<any> = [];
  batchList: Array<any> = [];
  courseBatchList: Array<any> = [];
  courseGroupsWithTeacher: Array<any> = [];
  batchListArr: any[] = [];
  filterApply: boolean = false;
  tempFilterCourseGroup: any[] = [];
  subscription: Subscription;

  constructor(
    private shareService: ShardServiceService,
    private academicService: AcademicService,
  ) { }

  ngOnInit() {
    this.getClassTeacherList();
  }

  getClassTeacherList(courseId = '') {
    this.shareService.present();
    this.subscription = this.academicService.getClassTeacherList(courseId).subscribe(resp => {
      this.shareService.dismiss();

      if (resp.status == "success") {
        this.courses = resp.courses;
        this.courses.forEach(course => {
          this.courseList = [...this.courseList, ...course.courses];
        })

        this.courseGroups = resp.course_groups;
        this.batchList = resp.batches;
        this.batchListArr = this.batchList.filter(batch => batch.course_id >= 1).sort((a, b) => a.course_id - b.course_id);;
        console.log("batchArr", this.batchListArr);
        this.courseGroups.forEach(group => {

          group.courses.forEach(course => {

            course.batches.forEach(batch => {
              let item = this.batchListArr.find(x => x.course_id == batch.course_id && x.name == batch.name);
              batch.batch_detail = item;
            })
          })
        })

        console.log("this.courseGroups", this.courseGroups);
      }
    }, error => {
      this.shareService.dismiss();
      this.shareService.openToast(error.error.errors.message[0], "danger");
    })
  }



  changeCourse(event) {
    let courseId = (event.detail.value);
    if (this.filterApply == false) {
      let temp = JSON.stringify(this.courseGroups);
      this.tempFilterCourseGroup = JSON.parse(temp);
    }
    else {
      this.courseGroups = JSON.parse(JSON.stringify(this.tempFilterCourseGroup));
    }
    this.filterApply = true;
    let filterCourse: Array<any> = this.courseGroups.map(x => {
      x.courses = x.courses.filter(z => courseId.includes(z.id))
      return x;
    });

    this.courseGroups = filterCourse.filter(x => x.courses.length != 0);
    console.log("this.filtercourseGroups", this.courseGroups);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


