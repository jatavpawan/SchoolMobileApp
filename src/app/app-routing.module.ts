import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '',loadChildren: () =>import('./pages/login/login.module').then(m => m.LoginPageModule)},
  { path: 'register', loadChildren: () =>  import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'about', loadChildren: () =>  import('./pages/about/about.module').then(m => m.AboutPageModule) },
  { path: 'settings',loadChildren: () =>  import('./pages/settings/settings.module').then(m => m.SettingsPageModule)},
  { path: 'edit-profile',loadChildren: () =>  import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) },
  { path: 'home-results',loadChildren: () =>  import('./pages/home-results/home-results.module').then(m => m.HomeResultsPageModule) },
  { path: 'dashboard',   loadChildren: () =>  import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule) },
    
  {    path: 'academic-time-table',    loadChildren: () => import('./pages/academic/time-table/time-table.module').then(m => m.TimeTablePageModule),  },
  {    path: 'academic-subject-teacher',
    loadChildren: () =>      import('./pages/academic/subject-teacher/subject-teacher.module').then(m => m.SubjectTeacherPageModule),
       
  },
  {  path: 'academic-Class-teacher',    loadChildren: () =>      import('./pages/academic/class-teacher/class-teacher.module').then(m => m.ClassTeacherPageModule),  },
  {    path: 'student-card',    loadChildren: () =>      import('./pages/Student//student-card/student-card.module').then(m => m.StudentCardPageModule), },
  {
    path: 'student-attendence',
    loadChildren: () =>
      import('./pages/Student/student-attendence/student-attendence.module').then(m => m.StudentAttendencePageModule),
       
  },
  {
    path: 'employee-card',
    loadChildren: () =>
      import('./pages/Employee/employee-card/employee-card.module').then(m => m.EmployeeCardPageModule),
       
  },
  {
    path: 'student-profile/:id',
    loadChildren: () =>
      import('./pages/Student/profile/profile.module').then(m => m.profilePageModule),
       
  },
 {
    path: 'employee-profile/:id',
    loadChildren: () =>
      import('./pages/Employee/profile/profile.module').then(m => m.profilePageModule),
       
  }, 
  {
    path: 'leave-request',    loadChildren: () =>      import('./pages/Employee/leave-request/leave-request.module').then(m => m.LeaveRequestPageModule),
  },
  {
    path: 'create-leave-request',    loadChildren: () =>      import('./pages/Employee/create-leave-request/create-leave-request.module').then(m => m.CreateLeaveRequestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
