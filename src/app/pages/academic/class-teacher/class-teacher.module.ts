import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClassTeacherComponent } from './class-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: ClassTeacherComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClassTeacherComponent]
})
export class ClassTeacherPageModule {}
