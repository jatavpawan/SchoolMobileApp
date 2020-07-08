import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateLeaveRequestComponent } from './create-leave-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: CreateLeaveRequestComponent
  }
];

@NgModule({
  declarations: [CreateLeaveRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class CreateLeaveRequestModule { }
