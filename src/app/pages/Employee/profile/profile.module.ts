import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './profile.component'; 
import { emp_expandableComponent } from 'src/app/components/Emp_expandable/emp_expandable.component';
 

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent,emp_expandableComponent]
})
export class profilePageModule {}
