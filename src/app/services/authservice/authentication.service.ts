import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../dataservice/data.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private dataService: DataService, 
    private router: Router,
    public navCtrl: NavController,
  ) { }

  setUserdata(userdata) {
     localStorage.setItem("LoggedInUser", JSON.stringify (userdata))
   }
   getUserdata() {
     return  localStorage.getItem("LoggedInUser");
   }

  setToken(token: string) {
     localStorage.setItem("id_token", token);
   }
   getToken() {
     return  localStorage.getItem("id_token");
   }

   isLoggedIn() {
     return this.getUserdata() !== null;
   }
   logout() {
     localStorage.removeItem("LoggedInUser");
     localStorage.removeItem("id_token");
     this.navCtrl.navigateRoot('/');
   }

   loginUser(data){
      return <Observable<any>> this.dataService.postData('auth/login', data);
    }
    
    getTimeTableList(batchIds, dateEffective){

        if(dateEffective !=  ''){
            return <Observable<any>> this.dataService.getData(`timetable?page=1&sort_by=date_effective&order=desc&batch_id=${batchIds}&date_effective=${dateEffective}&show_session_name=true&show_session_timing=true&show_session_subject_name=true&show_session_teacher_name=true&page_length=10`);
        }
        else{
            return <Observable<any>> this.dataService.getData(`timetable?page=1&sort_by=date_effective&order=desc&batch_id=${batchIds}&show_session_name=true&show_session_timing=true&show_session_subject_name=true&show_session_teacher_name=true&page_length=10`);
        }

   }

   data(){
     let obj = {
      "status": "success",
      "timetables": {
          "current_page": 1,
          "data": [
              {
                  "id": 2,
                  "uuid": "cd67e453-3198-47f8-8898-f6e1ad8f8021",
                  "batch_id": 7,
                  "date_effective": "2020-06-28T18:30:00.000000Z",
                  "description": null,
                  "options": [],
                  "created_at": "2020-06-27T12:55:01.000000Z",
                  "updated_at": "2020-06-27T12:55:01.000000Z",
                  "batch": {
                      "id": 7,
                      "position": 0,
                      "course_id": 4,
                      "name": "Section A",
                      "exam_observation_id": null,
                      "exam_grade_id": null,
                      "description": null,
                      "options": {
                          "max_strength": 25,
                          "roll_number_prefix": "IA",
                          "default_attendance_method": "once",
                          "roll_number_digit": 1,
                          "holidays_except": []
                      },
                      "created_at": "2020-06-27T10:13:03.000000Z",
                      "updated_at": "2020-06-27T10:13:03.000000Z",
                      "holidays_except": [],
                      "course": {
                          "id": 4,
                          "position": 0,
                          "academic_session_id": 1,
                          "course_group_id": 2,
                          "name": "Grade I",
                          "description": null,
                          "options": {
                              "enable_registration": 1,
                              "enable_registration_fee": 1,
                              "registration_fee": 500
                          },
                          "created_at": "2020-06-27T09:58:23.000000Z",
                          "updated_at": "2020-06-27T12:40:45.000000Z",
                          "course_group": {
                              "id": 2,
                              "position": 0,
                              "academic_session_id": 1,
                              "name": "Primary Classes",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T09:58:08.000000Z",
                              "updated_at": "2020-06-27T09:58:08.000000Z"
                          }
                      },
                      "subjects": [
                          {
                              "id": 10,
                              "batch_id": 7,
                              "name": "English",
                              "code": "eng1",
                              "shortcode": "eng101",
                              "position": 0,
                              "is_elective": 0,
                              "has_no_exam": 0,
                              "max_class_per_week": 5,
                              "description": null,
                              "options": {
                                  "group": 1
                              },
                              "created_at": "2020-06-27T10:25:20.000000Z",
                              "updated_at": "2020-06-27T10:25:20.000000Z",
                              "subject_teachers": []
                          },
                          {
                              "id": 11,
                              "batch_id": 7,
                              "name": "Hindi",
                              "code": "Hindi1",
                              "shortcode": "Hindi1",
                              "position": 0,
                              "is_elective": 0,
                              "has_no_exam": 0,
                              "max_class_per_week": 5,
                              "description": null,
                              "options": {
                                  "group": 2
                              },
                              "created_at": "2020-06-27T10:25:51.000000Z",
                              "updated_at": "2020-06-27T10:25:51.000000Z",
                              "subject_teachers": []
                          },
                          {
                              "id": 12,
                              "batch_id": 7,
                              "name": "Mathemetics",
                              "code": "Math1",
                              "shortcode": "math",
                              "position": 0,
                              "is_elective": 0,
                              "has_no_exam": 0,
                              "max_class_per_week": 5,
                              "description": null,
                              "options": {
                                  "group": 2
                              },
                              "created_at": "2020-06-27T10:26:26.000000Z",
                              "updated_at": "2020-06-27T10:26:26.000000Z",
                              "subject_teachers": []
                          },
                          {
                              "id": 13,
                              "batch_id": 7,
                              "name": "Science",
                              "code": "S101",
                              "shortcode": "science",
                              "position": 0,
                              "is_elective": 0,
                              "has_no_exam": 0,
                              "max_class_per_week": 5,
                              "description": null,
                              "options": {
                                  "group": 1
                              },
                              "created_at": "2020-06-27T10:27:15.000000Z",
                              "updated_at": "2020-06-27T10:27:15.000000Z",
                              "subject_teachers": []
                          }
                      ]
                  },
                  "timetable_allocations": [
                      {
                          "id": 8,
                          "timetable_id": 2,
                          "day": "monday",
                          "class_timing_id": 2,
                          "options": null,
                          "created_at": "2020-06-27T12:55:01.000000Z",
                          "updated_at": "2020-06-27T12:55:01.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 2,
                              "uuid": "010207c9-e06b-4c5d-9b2e-d3fc2ff4808c",
                              "academic_session_id": 1,
                              "name": "Grade I",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T12:11:20.000000Z",
                              "updated_at": "2020-06-27T12:11:20.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 2,
                                      "uuid": "631fad7e-9cc1-4199-b0c3-5bf2bd1e9234",
                                      "class_timing_id": 2,
                                      "name": "Session I",
                                      "start": "10:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 0,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:11:20.000000Z",
                                      "updated_at": "2020-06-27T12:11:20.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 9,
                          "timetable_id": 2,
                          "day": "tuesday",
                          "class_timing_id": 2,
                          "options": null,
                          "created_at": "2020-06-27T12:55:01.000000Z",
                          "updated_at": "2020-06-27T12:55:01.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 2,
                              "uuid": "010207c9-e06b-4c5d-9b2e-d3fc2ff4808c",
                              "academic_session_id": 1,
                              "name": "Grade I",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T12:11:20.000000Z",
                              "updated_at": "2020-06-27T12:11:20.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 2,
                                      "uuid": "631fad7e-9cc1-4199-b0c3-5bf2bd1e9234",
                                      "class_timing_id": 2,
                                      "name": "Session I",
                                      "start": "10:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 0,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:11:20.000000Z",
                                      "updated_at": "2020-06-27T12:11:20.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 10,
                          "timetable_id": 2,
                          "day": "wednesday",
                          "class_timing_id": 2,
                          "options": null,
                          "created_at": "2020-06-27T12:55:01.000000Z",
                          "updated_at": "2020-06-27T12:55:01.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 2,
                              "uuid": "010207c9-e06b-4c5d-9b2e-d3fc2ff4808c",
                              "academic_session_id": 1,
                              "name": "Grade I",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T12:11:20.000000Z",
                              "updated_at": "2020-06-27T12:11:20.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 2,
                                      "uuid": "631fad7e-9cc1-4199-b0c3-5bf2bd1e9234",
                                      "class_timing_id": 2,
                                      "name": "Session I",
                                      "start": "10:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 0,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:11:20.000000Z",
                                      "updated_at": "2020-06-27T12:11:20.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 11,
                          "timetable_id": 2,
                          "day": "thursday",
                          "class_timing_id": 2,
                          "options": null,
                          "created_at": "2020-06-27T12:55:01.000000Z",
                          "updated_at": "2020-06-27T12:55:01.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 2,
                              "uuid": "010207c9-e06b-4c5d-9b2e-d3fc2ff4808c",
                              "academic_session_id": 1,
                              "name": "Grade I",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T12:11:20.000000Z",
                              "updated_at": "2020-06-27T12:11:20.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 2,
                                      "uuid": "631fad7e-9cc1-4199-b0c3-5bf2bd1e9234",
                                      "class_timing_id": 2,
                                      "name": "Session I",
                                      "start": "10:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 0,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:11:20.000000Z",
                                      "updated_at": "2020-06-27T12:11:20.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 12,
                          "timetable_id": 2,
                          "day": "friday",
                          "class_timing_id": 2,
                          "options": null,
                          "created_at": "2020-06-27T12:55:01.000000Z",
                          "updated_at": "2020-06-27T12:55:01.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 2,
                              "uuid": "010207c9-e06b-4c5d-9b2e-d3fc2ff4808c",
                              "academic_session_id": 1,
                              "name": "Grade I",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T12:11:20.000000Z",
                              "updated_at": "2020-06-27T12:11:20.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 2,
                                      "uuid": "631fad7e-9cc1-4199-b0c3-5bf2bd1e9234",
                                      "class_timing_id": 2,
                                      "name": "Session I",
                                      "start": "10:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 0,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:11:20.000000Z",
                                      "updated_at": "2020-06-27T12:11:20.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 13,
                          "timetable_id": 2,
                          "day": "saturday",
                          "class_timing_id": 2,
                          "options": null,
                          "created_at": "2020-06-27T12:55:01.000000Z",
                          "updated_at": "2020-06-27T12:55:01.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 2,
                              "uuid": "010207c9-e06b-4c5d-9b2e-d3fc2ff4808c",
                              "academic_session_id": 1,
                              "name": "Grade I",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T12:11:20.000000Z",
                              "updated_at": "2020-06-27T12:11:20.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 2,
                                      "uuid": "631fad7e-9cc1-4199-b0c3-5bf2bd1e9234",
                                      "class_timing_id": 2,
                                      "name": "Session I",
                                      "start": "10:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 0,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:11:20.000000Z",
                                      "updated_at": "2020-06-27T12:11:20.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 14,
                          "timetable_id": 2,
                          "day": "sunday",
                          "class_timing_id": null,
                          "options": null,
                          "created_at": "2020-06-27T12:55:01.000000Z",
                          "updated_at": "2020-06-27T12:55:01.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": null
                      }
                  ]
              },
              {
                  "id": 1,
                  "uuid": "0f0c4cfb-d1d9-48a1-9567-7075128bbdca",
                  "batch_id": 1,
                  "date_effective": "2020-06-26T18:30:00.000000Z",
                  "description": null,
                  "options": [],
                  "created_at": "2020-06-27T12:54:11.000000Z",
                  "updated_at": "2020-06-27T12:54:11.000000Z",
                  "batch": {
                      "id": 1,
                      "position": 0,
                      "course_id": 1,
                      "name": "Section A",
                      "exam_observation_id": null,
                      "exam_grade_id": null,
                      "description": null,
                      "options": {
                          "max_strength": 30,
                          "roll_number_prefix": "NA",
                          "default_attendance_method": "once",
                          "roll_number_digit": 101,
                          "holidays_except": []
                      },
                      "created_at": "2020-06-27T10:06:09.000000Z",
                      "updated_at": "2020-06-27T10:07:20.000000Z",
                      "holidays_except": [],
                      "course": {
                          "id": 1,
                          "position": 0,
                          "academic_session_id": 1,
                          "course_group_id": 1,
                          "name": "Nursery",
                          "description": "Children",
                          "options": {
                              "enable_registration": 1,
                              "enable_registration_fee": 0,
                              "registration_fee": 0
                          },
                          "created_at": "2020-06-27T09:50:38.000000Z",
                          "updated_at": "2020-06-27T09:50:38.000000Z",
                          "course_group": {
                              "id": 1,
                              "position": 0,
                              "academic_session_id": 1,
                              "name": "Pre-school",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T09:50:12.000000Z",
                              "updated_at": "2020-06-27T09:50:12.000000Z"
                          }
                      },
                      "subjects": [
                          {
                              "id": 1,
                              "batch_id": 1,
                              "name": "Language",
                              "code": "LAN",
                              "shortcode": "Lang",
                              "position": 0,
                              "is_elective": 0,
                              "has_no_exam": 0,
                              "max_class_per_week": 1,
                              "description": null,
                              "options": {
                                  "group": ""
                              },
                              "created_at": "2020-06-27T10:17:46.000000Z",
                              "updated_at": "2020-06-27T10:18:14.000000Z",
                              "subject_teachers": [
                                  {
                                      "id": 1,
                                      "subject_id": 1,
                                      "employee_id": 6,
                                      "date_effective": "2020-05-31T18:30:00.000000Z",
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:08:25.000000Z",
                                      "updated_at": "2020-06-27T12:08:25.000000Z",
                                      "employee": {
                                          "id": 6,
                                          "uuid": "130adc98-7f66-4da0-99c1-23869285c371",
                                          "prefix": null,
                                          "user_id": null,
                                          "code": 5,
                                          "first_name": "Ajay",
                                          "middle_name": null,
                                          "last_name": "Soni",
                                          "date_of_birth": "1988-05-31T18:30:00.000000Z",
                                          "date_of_anniversary": null,
                                          "gender": "male",
                                          "marital_status": null,
                                          "contact_number": 8876544332,
                                          "alternate_contact_number": null,
                                          "email": null,
                                          "alternate_email": null,
                                          "nationality": null,
                                          "blood_group_id": null,
                                          "religion_id": null,
                                          "category_id": null,
                                          "caste_id": null,
                                          "photo": null,
                                          "mother_tongue": null,
                                          "unique_identification_number": null,
                                          "father_name": "Devi Singh",
                                          "mother_name": "radha",
                                          "spouse_name": null,
                                          "emergency_contact_name": null,
                                          "emergency_contact_number": null,
                                          "present_address_line_1": null,
                                          "present_address_line_2": null,
                                          "present_city": null,
                                          "present_state": null,
                                          "present_zipcode": null,
                                          "present_country": null,
                                          "same_as_present_address": 0,
                                          "permanent_address_line_1": null,
                                          "permanent_address_line_2": null,
                                          "permanent_city": null,
                                          "permanent_state": null,
                                          "permanent_zipcode": null,
                                          "permanent_country": null,
                                          "options": [],
                                          "created_at": "2020-06-27T11:59:08.000000Z",
                                          "updated_at": "2020-06-27T12:15:14.000000Z",
                                          "present_address": "",
                                          "permanent_address": "",
                                          "name": "Ajay Soni",
                                          "age": {
                                              "years": 32,
                                              "months": 0,
                                              "days": 28
                                          },
                                          "employee_code": 5
                                      }
                                  }
                              ]
                          },
                          {
                              "id": 2,
                              "batch_id": 1,
                              "name": "Environment",
                              "code": "EVN",
                              "shortcode": "EVN1",
                              "position": 0,
                              "is_elective": 0,
                              "has_no_exam": 0,
                              "max_class_per_week": 1,
                              "description": null,
                              "options": {
                                  "group": ""
                              },
                              "created_at": "2020-06-27T10:19:30.000000Z",
                              "updated_at": "2020-06-27T10:19:30.000000Z",
                              "subject_teachers": [
                                  {
                                      "id": 2,
                                      "subject_id": 2,
                                      "employee_id": 3,
                                      "date_effective": "2020-05-31T18:30:00.000000Z",
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:08:35.000000Z",
                                      "updated_at": "2020-06-27T12:08:35.000000Z",
                                      "employee": {
                                          "id": 3,
                                          "uuid": "7b504874-d387-4665-ac1e-7335034db98b",
                                          "prefix": null,
                                          "user_id": null,
                                          "code": 2,
                                          "first_name": "Ram",
                                          "middle_name": "Singh",
                                          "last_name": "Rajput",
                                          "date_of_birth": "1991-03-05T18:30:00.000000Z",
                                          "date_of_anniversary": null,
                                          "gender": "male",
                                          "marital_status": null,
                                          "contact_number": 1220987665,
                                          "alternate_contact_number": null,
                                          "email": null,
                                          "alternate_email": null,
                                          "nationality": null,
                                          "blood_group_id": null,
                                          "religion_id": null,
                                          "category_id": null,
                                          "caste_id": null,
                                          "photo": null,
                                          "mother_tongue": null,
                                          "unique_identification_number": null,
                                          "father_name": "Jay SIngh",
                                          "mother_name": "Vidhya",
                                          "spouse_name": null,
                                          "emergency_contact_name": null,
                                          "emergency_contact_number": null,
                                          "present_address_line_1": null,
                                          "present_address_line_2": null,
                                          "present_city": null,
                                          "present_state": null,
                                          "present_zipcode": null,
                                          "present_country": null,
                                          "same_as_present_address": 0,
                                          "permanent_address_line_1": null,
                                          "permanent_address_line_2": null,
                                          "permanent_city": null,
                                          "permanent_state": null,
                                          "permanent_zipcode": null,
                                          "permanent_country": null,
                                          "options": [],
                                          "created_at": "2020-06-27T11:54:31.000000Z",
                                          "updated_at": "2020-06-27T12:15:14.000000Z",
                                          "present_address": "",
                                          "permanent_address": "",
                                          "name": "Ram Singh Rajput",
                                          "age": {
                                              "years": 29,
                                              "months": 3,
                                              "days": 23
                                          },
                                          "employee_code": 2
                                      }
                                  }
                              ]
                          },
                          {
                              "id": 3,
                              "batch_id": 1,
                              "name": "Number",
                              "code": "NUM",
                              "shortcode": "num",
                              "position": 0,
                              "is_elective": 0,
                              "has_no_exam": 0,
                              "max_class_per_week": 1,
                              "description": null,
                              "options": {
                                  "group": ""
                              },
                              "created_at": "2020-06-27T10:20:14.000000Z",
                              "updated_at": "2020-06-27T10:20:14.000000Z",
                              "subject_teachers": [
                                  {
                                      "id": 3,
                                      "subject_id": 3,
                                      "employee_id": 2,
                                      "date_effective": "2020-05-31T18:30:00.000000Z",
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T12:08:46.000000Z",
                                      "updated_at": "2020-06-27T12:08:46.000000Z",
                                      "employee": {
                                          "id": 2,
                                          "uuid": "c8db504c-32ce-469a-84ba-4f6197689664",
                                          "prefix": null,
                                          "user_id": null,
                                          "code": 1,
                                          "first_name": "Vikky",
                                          "middle_name": "Singh",
                                          "last_name": "Rojwal",
                                          "date_of_birth": "1987-02-03T18:30:00.000000Z",
                                          "date_of_anniversary": null,
                                          "gender": "male",
                                          "marital_status": null,
                                          "contact_number": 1231234112,
                                          "alternate_contact_number": null,
                                          "email": null,
                                          "alternate_email": null,
                                          "nationality": null,
                                          "blood_group_id": null,
                                          "religion_id": null,
                                          "category_id": null,
                                          "caste_id": null,
                                          "photo": null,
                                          "mother_tongue": null,
                                          "unique_identification_number": null,
                                          "father_name": "Vijay  Goyal",
                                          "mother_name": "Shradha",
                                          "spouse_name": null,
                                          "emergency_contact_name": null,
                                          "emergency_contact_number": null,
                                          "present_address_line_1": null,
                                          "present_address_line_2": null,
                                          "present_city": null,
                                          "present_state": null,
                                          "present_zipcode": null,
                                          "present_country": null,
                                          "same_as_present_address": 0,
                                          "permanent_address_line_1": null,
                                          "permanent_address_line_2": null,
                                          "permanent_city": null,
                                          "permanent_state": null,
                                          "permanent_zipcode": null,
                                          "permanent_country": null,
                                          "options": [],
                                          "created_at": "2020-06-27T11:52:06.000000Z",
                                          "updated_at": "2020-06-27T12:15:14.000000Z",
                                          "present_address": "",
                                          "permanent_address": "",
                                          "name": "Vikky Singh Rojwal",
                                          "age": {
                                              "years": 33,
                                              "months": 4,
                                              "days": 25
                                          },
                                          "employee_code": 1
                                      }
                                  }
                              ]
                          }
                      ]
                  },
                  "timetable_allocations": [
                      {
                          "id": 1,
                          "timetable_id": 1,
                          "day": "monday",
                          "class_timing_id": 1,
                          "options": null,
                          "created_at": "2020-06-27T12:54:11.000000Z",
                          "updated_at": "2020-06-27T12:54:11.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 1,
                              "uuid": "a1beb108-7c3f-41f2-81ba-432eea6f6974",
                              "academic_session_id": 1,
                              "name": "Nursery A section",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T11:47:35.000000Z",
                              "updated_at": "2020-06-27T11:47:35.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 1,
                                      "uuid": "5bef1b40-9024-40a7-a157-be85a3828bf7",
                                      "class_timing_id": 1,
                                      "name": "Session 1",
                                      "start": "09:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 1,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T11:47:35.000000Z",
                                      "updated_at": "2020-06-27T11:47:35.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 2,
                          "timetable_id": 1,
                          "day": "tuesday",
                          "class_timing_id": 1,
                          "options": null,
                          "created_at": "2020-06-27T12:54:11.000000Z",
                          "updated_at": "2020-06-27T12:54:11.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 1,
                              "uuid": "a1beb108-7c3f-41f2-81ba-432eea6f6974",
                              "academic_session_id": 1,
                              "name": "Nursery A section",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T11:47:35.000000Z",
                              "updated_at": "2020-06-27T11:47:35.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 1,
                                      "uuid": "5bef1b40-9024-40a7-a157-be85a3828bf7",
                                      "class_timing_id": 1,
                                      "name": "Session 1",
                                      "start": "09:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 1,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T11:47:35.000000Z",
                                      "updated_at": "2020-06-27T11:47:35.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 3,
                          "timetable_id": 1,
                          "day": "wednesday",
                          "class_timing_id": 1,
                          "options": null,
                          "created_at": "2020-06-27T12:54:11.000000Z",
                          "updated_at": "2020-06-27T12:54:11.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 1,
                              "uuid": "a1beb108-7c3f-41f2-81ba-432eea6f6974",
                              "academic_session_id": 1,
                              "name": "Nursery A section",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T11:47:35.000000Z",
                              "updated_at": "2020-06-27T11:47:35.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 1,
                                      "uuid": "5bef1b40-9024-40a7-a157-be85a3828bf7",
                                      "class_timing_id": 1,
                                      "name": "Session 1",
                                      "start": "09:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 1,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T11:47:35.000000Z",
                                      "updated_at": "2020-06-27T11:47:35.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 4,
                          "timetable_id": 1,
                          "day": "thursday",
                          "class_timing_id": 1,
                          "options": null,
                          "created_at": "2020-06-27T12:54:11.000000Z",
                          "updated_at": "2020-06-27T12:54:11.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 1,
                              "uuid": "a1beb108-7c3f-41f2-81ba-432eea6f6974",
                              "academic_session_id": 1,
                              "name": "Nursery A section",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T11:47:35.000000Z",
                              "updated_at": "2020-06-27T11:47:35.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 1,
                                      "uuid": "5bef1b40-9024-40a7-a157-be85a3828bf7",
                                      "class_timing_id": 1,
                                      "name": "Session 1",
                                      "start": "09:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 1,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T11:47:35.000000Z",
                                      "updated_at": "2020-06-27T11:47:35.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 5,
                          "timetable_id": 1,
                          "day": "friday",
                          "class_timing_id": 1,
                          "options": null,
                          "created_at": "2020-06-27T12:54:11.000000Z",
                          "updated_at": "2020-06-27T12:54:11.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 1,
                              "uuid": "a1beb108-7c3f-41f2-81ba-432eea6f6974",
                              "academic_session_id": 1,
                              "name": "Nursery A section",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T11:47:35.000000Z",
                              "updated_at": "2020-06-27T11:47:35.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 1,
                                      "uuid": "5bef1b40-9024-40a7-a157-be85a3828bf7",
                                      "class_timing_id": 1,
                                      "name": "Session 1",
                                      "start": "09:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 1,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T11:47:35.000000Z",
                                      "updated_at": "2020-06-27T11:47:35.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 6,
                          "timetable_id": 1,
                          "day": "saturday",
                          "class_timing_id": 1,
                          "options": null,
                          "created_at": "2020-06-27T12:54:11.000000Z",
                          "updated_at": "2020-06-27T12:54:11.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": {
                              "id": 1,
                              "uuid": "a1beb108-7c3f-41f2-81ba-432eea6f6974",
                              "academic_session_id": 1,
                              "name": "Nursery A section",
                              "description": null,
                              "options": [],
                              "created_at": "2020-06-27T11:47:35.000000Z",
                              "updated_at": "2020-06-27T11:47:35.000000Z",
                              "class_timing_sessions": [
                                  {
                                      "id": 1,
                                      "uuid": "5bef1b40-9024-40a7-a157-be85a3828bf7",
                                      "class_timing_id": 1,
                                      "name": "Session 1",
                                      "start": "09:00:00",
                                      "end": "11:00:00",
                                      "is_a_break": 1,
                                      "description": null,
                                      "options": [],
                                      "created_at": "2020-06-27T11:47:35.000000Z",
                                      "updated_at": "2020-06-27T11:47:35.000000Z"
                                  }
                              ]
                          }
                      },
                      {
                          "id": 7,
                          "timetable_id": 1,
                          "day": "sunday",
                          "class_timing_id": null,
                          "options": null,
                          "created_at": "2020-06-27T12:54:11.000000Z",
                          "updated_at": "2020-06-27T12:54:11.000000Z",
                          "timetable_allocation_details": [],
                          "class_timing": null
                      }
                  ]
              }
          ],
          "first_page_url": "https://rginfotechcta.com/api/timetable?page=1",
          "from": 1,
          "last_page": 1,
          "last_page_url": "https://rginfotechcta.com/api/timetable?page=1",
          "next_page_url": null,
          "path": "https://rginfotechcta.com/api/timetable",
          "per_page": 10,
          "prev_page_url": null,
          "to": 2,
          "total": 2
      },
      "filters": {
          "batches": [
              {
                  "course_group": "Pre-school",
                  "batches": [
                      {
                          "id": 1,
                          "name": "Nursery Section A"
                      },
                      {
                          "id": 2,
                          "name": "Nursery Section B"
                      },
                      {
                          "id": 3,
                          "name": "UKG Section A"
                      },
                      {
                          "id": 4,
                          "name": "UKG Section B"
                      },
                      {
                          "id": 5,
                          "name": "LKG Section A"
                      },
                      {
                          "id": 6,
                          "name": "LKG Section B"
                      }
                  ]
              },
              {
                  "course_group": "Primary Classes",
                  "batches": [
                      {
                          "id": 7,
                          "name": "Grade I Section A"
                      },
                      {
                          "id": 8,
                          "name": "Grade I Section B"
                      },
                      {
                          "id": 9,
                          "name": "Grade II Section A"
                      }
                  ]
              }
          ]
      }
    }
    
   }

   getClassTeacherList(course_id = ''){
    return <Observable<any>> this.dataService.getData(`class/teacher?options=1&course_id=${course_id}&show_history=true`);
   }
   
   courseBatchList(){
    return <Observable<any>> this.dataService.getData(`subject/teacher`);
   }

   subjectTeachersByBatchId(batchId){
    return <Observable<any>> this.dataService.postData(`subject/teacher/${batchId}`, null);
   }
   
   StudentList(batchIds='', pageNo=1){
    return <Observable<any>> this.dataService.getData(`student?page=${pageNo}&sort_by=first_name&order=asc&batch_id=${batchIds}&blood_group_id=&religion_id=&caste_id=&gender=&category_id=&student_group_id=&columns=father_name,date_of_admission,admission_number,contact_number&page_length=12`);
   }
  
   studentDetailByStudentId(id){
    return <Observable<any>> this.dataService.getData(`student/${id}`);
   }


}










