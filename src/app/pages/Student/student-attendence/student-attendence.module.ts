import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';
import { IonicModule } from '@ionic/angular';

import { StudentAttendenceComponent } from './student-attendence.component';

const routes: Routes = [
  {
    path: '',
    component: StudentAttendenceComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxFullCalendarModule,
  ],
  declarations: [StudentAttendenceComponent]
})
export class StudentAttendencePageModule {}
