let leaveAllocation = {
   "status":"success",
   "leave_allocations":{
      "current_page":1,
      "data":[
         {
            "id":2,
            "uuid":"d0e26795-55e6-4cb3-817e-32a3bbc7bb46",
            "employee_id":27,
            "start_date":"2020-06-30T18:30:00.000000Z",
            "end_date":"2020-07-30T18:30:00.000000Z",
            "description":"Testing",
            "options":[
            ],
            "created_at":"2020-07-08T15:06:58.000000Z",
            "updated_at":"2020-07-08T15:06:58.000000Z",
            "employee":{
               "id":27,
               "code":126,
               "prefix":"SM",
               "first_name":"Afreen",
               "middle_name":null,
               "last_name":"Kakar",
               "present_address":"",
               "permanent_address":"",
               "name":"Afreen Kakar",
               "age":null,
               "employee_code":"SM0126",
               "employee_designations":[
                  {
                     "id":26,
                     "employee_id":27,
                     "designation_id":8,
                     "department_id":2,
                     "date_effective":"2018-04-16",
                     "date_end":null,
                     "designation":{
                        "id":8,
                        "name":"Primary Teacher",
                        "employee_category_id":3,
                        "employee_category":{
                           "id":3,
                           "name":"Teaching Staff"
                        }
                     },
                     "department":{
                        "id":2,
                        "name":"Academic Department"
                     }
                  }
               ]
            },
            "leave_allocation_details":[
               {
                  "id":3,
                  "employee_leave_allocation_id":2,
                  "employee_leave_type_id":1,
                  "allotted":8,
                  "used":0,
                  "leave_type":{
                     "id":1,
                     "name":"Casual Leave"
                  }
               },
               {
                  "id":4,
                  "employee_leave_allocation_id":2,
                  "employee_leave_type_id":2,
                  "allotted":12,
                  "used":0,
                  "leave_type":{
                     "id":2,
                     "name":"Medical Leave"
                  }
               }
            ]
         },
         {
            "id":1,
            "uuid":"f80e3946-0b17-4d16-acb5-7e0ce985e076",
            "employee_id":4,
            "start_date":"2019-03-31T18:30:00.000000Z",
            "end_date":"2020-03-30T18:30:00.000000Z",
            "description":"Leave allotted",
            "options":[

            ],
            "created_at":"2019-08-12T21:23:53.000000Z",
            "updated_at":"2019-08-12T21:23:53.000000Z",
            "employee":{
               "id":4,
               "code":103,
               "prefix":"SM",
               "first_name":"Malik",
               "middle_name":null,
               "last_name":"Varty",
               "present_address":"",
               "permanent_address":"",
               "name":"Malik Varty",
               "age":null,
               "employee_code":"SM0103",
               "employee_designations":[
                  {
                     "id":3,
                     "employee_id":4,
                     "designation_id":4,
                     "department_id":1,
                     "date_effective":"2018-04-10",
                     "date_end":null,
                     "designation":{
                        "id":4,
                        "name":"Principal",
                        "employee_category_id":2,
                        "employee_category":{
                           "id":2,
                           "name":"Administrative Staff"
                        }
                     },
                     "department":{
                        "id":1,
                        "name":"Administration Department"
                     }
                  }
               ]
            },
            "leave_allocation_details":[
               {
                  "id":1,
                  "employee_leave_allocation_id":1,
                  "employee_leave_type_id":1,
                  "allotted":10,
                  "used":3,
                  "leave_type":{
                     "id":1,
                     "name":"Casual Leave"
                  }
               },
               {
                  "id":2,
                  "employee_leave_allocation_id":1,
                  "employee_leave_type_id":2,
                  "allotted":15,
                  "used":0,
                  "leave_type":{
                     "id":2,
                     "name":"Medical Leave"
                  }
               }
            ]
         }
      ],
      "first_page_url":"https:\/\/in.instikit.com\/api\/employee\/leave\/allocation?page=1",
      "from":1,
      "last_page":1,
      "last_page_url":"https:\/\/in.instikit.com\/api\/employee\/leave\/allocation?page=1",
      "next_page_url":null,
      "path":"https:\/\/in.instikit.com\/api\/employee\/leave\/allocation",
      "per_page":10,
      "prev_page_url":null,
      "to":2,
      "total":2
   },
   "filters":{
      "leave_types":[
         {
            "name":"Casual Leave",
            "id":1
         },
         {
            "name":"Medical Leave",
            "id":2
         }
      ],
      "employees":[
         {
            "name":"Aarif Hora (SM0108)",
            "id":9
         },
         {
            "name":"Afreen Kakar (SM0126)",
            "id":27
         },
         {
            "name":"Amolika Borra (SM0136)",
            "id":37
         },
         {
            "name":"Azhar Chahal (SM0124)",
            "id":25
         },
         {
            "name":"Bahadur Vaidya (SM0141)",
            "id":42
         },
         {
            "name":"Bishnu Choudhry (SM0106)",
            "id":7
         },
         {
            "name":"Chameli Mangat (SM0129)",
            "id":30
         },
         {
            "name":"Chandni Muni (SM0112)",
            "id":13
         },
         {
            "name":"Devendra Bal (SM0138)",
            "id":39
         },
         {
            "name":"Devika Amble (SM0111)",
            "id":12
         },
         {
            "name":"Dinesh Bansal (SM0149)",
            "id":50
         },
         {
            "name":"Gayatri Boase (SM0116)",
            "id":17
         },
         {
            "name":"Iqbal Shan (SM0148)",
            "id":49
         },
         {
            "name":"Jaswant Bhat (SM0105)",
            "id":6
         },
         {
            "name":"Kabeer Raja (SM0110)",
            "id":11
         },
         {
            "name":"Lata Amble (SM0134)",
            "id":35
         },
         {
            "name":"Madhu Reddy (SM0140)",
            "id":41
         },
         {
            "name":"Malik Varty (SM0103)",
            "id":4
         },
         {
            "name":"Mini Sahni (SM0150)",
            "id":51
         },
         {
            "name":"Monica Bhakta (SM0131)",
            "id":32
         },
         {
            "name":"Mowgli Mitter (SM0109)",
            "id":10
         },
         {
            "name":"Munni Merchant (SM0147)",
            "id":48
         },
         {
            "name":"Namita Nagarajan (SM0102)",
            "id":3
         },
         {
            "name":"Naresh Sridhar (SM0113)",
            "id":14
         },
         {
            "name":"Naval Sarraf (SM0101)",
            "id":2
         },
         {
            "name":"Niyati Bhargava (SM0122)",
            "id":23
         },
         {
            "name":"Nutan Saini (SM0133)",
            "id":34
         },
         {
            "name":"Pirzada Gopal (SM0117)",
            "id":18
         },
         {
            "name":"Poonam Tiwari (SM0146)",
            "id":47
         },
         {
            "name":"Prabhat Mutti (SM0142)",
            "id":43
         },
         {
            "name":"Radha Pardeshi (SM0128)",
            "id":29
         },
         {
            "name":"Radheshyam Iyer (SM0144)",
            "id":45
         },
         {
            "name":"Ragini Panchal (SM0139)",
            "id":40
         },
         {
            "name":"Raj Rajan (SM0132)",
            "id":33
         },
         {
            "name":"Richa Pradhan (SM0121)",
            "id":22
         },
         {
            "name":"Rimi Chakraborty (SM0115)",
            "id":16
         },
         {
            "name":"Ritika Nazareth (SM0145)",
            "id":46
         },
         {
            "name":"Ritika Tank (SM0130)",
            "id":31
         },
         {
            "name":"Rohini Memon (SM0123)",
            "id":24
         },
         {
            "name":"Rohini Sibal (SM0107)",
            "id":8
         },
         {
            "name":"Savita Srivastava (SM0104)",
            "id":5
         },
         {
            "name":"Sneha Borah (SM0119)",
            "id":20
         },
         {
            "name":"Sneha Sibal (SM0127)",
            "id":28
         },
         {
            "name":"Sumit Sha (SM0143)",
            "id":44
         },
         {
            "name":"Tejaswani Arya (SM0137)",
            "id":38
         },
         {
            "name":"Uday Shukla (SM0125)",
            "id":26
         },
         {
            "name":"Umar Goel (SM0114)",
            "id":15
         },
         {
            "name":"Urmila Goyal (SM0118)",
            "id":19
         },
         {
            "name":"Veena Kulkarni (SM0120)",
            "id":21
         },
         {
            "name":"Vikrant Kaul (SM0135)",
            "id":36
         }
      ]
   }
}