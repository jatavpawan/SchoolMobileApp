import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubjectTeacherComponent } from './Subject-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectTeacherComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubjectTeacherComponent]
})
export class SubjectTeacherPageModule {}
