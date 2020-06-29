import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { emp_expandableComponent } from './emp_expandable.component';

const routes: Routes = [
  {
    path: '',
    component: emp_expandableComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [emp_expandableComponent]
})
export class emp_expandablePageModule {}
