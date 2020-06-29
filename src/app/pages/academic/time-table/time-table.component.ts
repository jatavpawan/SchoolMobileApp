import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
   checked: Boolean = false;
   ctrl : any= [
      {
         
         Batch:'Nursery Section A',
         DateEffective :'01-10-2019',
         Status:'30/18 Partially Allocated',
         Description :'N/A',
         StatusColor:'label label-warning'
       }, {
         
         Batch:'Nursery Section A',
         DateEffective :'01-10-2019',
         Status:'0/0 Unallocated',
         Description :'N/A',
         StatusColor:'label label-Danger'
       }, {
         
        Batch:'Nursery Section A',
        DateEffective :'01-10-2019',
        Status:'30/30 Allocated',
        Description :'N/A',
        StatusColor:'label label-success'
      }, {
         
        Batch:'Nursery Section A',
        DateEffective :'01-10-2019',
        Status:'0/0 Unallocated',
        Description :'N/A',
         StatusColor:'label label-Danger'
      }, {
         
        Batch:'Nursery Section A',
        DateEffective :'01-10-2019',
        Status:'0/0 Unallocated',
        Description :'N/A',
         StatusColor:'label label-Danger'
      }, {
         
        Batch:'Nursery Section A',
        DateEffective :'01-10-2019',
        Status:'0/0 Unallocated',
        Description :'N/A',
         StatusColor:'label label-Danger'
      }, {
         
        Batch:'Nursery Section A',
        DateEffective :'01-10-2019',
        Status:'0/0 Unallocated',
        Description :'N/A',
         StatusColor:'label label-Danger'
      }, {
         
        Batch:'Nursery Section A',
        DateEffective :'01-10-2019',
        Status:'30/18 Partially Allocated',
        Description :'N/A',
         StatusColor:'label label-Danger'
      }, {
         
        Batch:'Nursery Section A',
        DateEffective :'01-10-2019',
        Status:'30/18 Partially Allocated',
        Description :'N/A',
         StatusColor:'label label-Danger'
      }, {
         
        Batch:'Nursery Section A',
        DateEffective :'01-10-2019',
        Status:'30/18 Partially Allocated',
        Description :'N/A',
         StatusColor:'label label-Danger'
      },
      
  ]   

  
  customPopoverOptions: any = {  
   //header: 'Flower Name',  
   //subHeader: 'Select number of persons',  
   class:"popover-contentss"
  // message: 'Only select your favorite flower'  
 };  

  constructor() { }

  ngOnInit() {
  }

}
