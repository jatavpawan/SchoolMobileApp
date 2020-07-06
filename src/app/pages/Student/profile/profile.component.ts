import { Component, OnInit } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authservice/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
studentID:string='';
  public items: any = [ { 
    title:'Basic Information',
    icon:'../../../assets/img/graduation-cap.svg',
    expanded: false,
   
  },
      {  title:'Parent Information',
      icon:'../../../assets/img/group.svg',
    expanded: false,
  },
      {  title:'Contact Information',
      icon:'../../../assets/img/address-book.svg',
    expanded: false },
      {  title:'Sibling Information',
      icon:'../../../assets/img/people-carry.svg',
    expanded: false },
      {  title:'User Login',
      icon:'../../../assets/img/sign-in-alt.svg',
    expanded: false },
    {  title:'Fee History',
      icon:'../../../assets/img/coins.svg',
    expanded: false },
     {  title:'Exam Report',
      icon:'../../../assets/img/file-alt.svg',
    expanded: false },  
     ];
  studentDetail: any;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    
    ) {
    
  }
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.studentID = params["id"];
      this.getStudentDetail(this.studentID);
    });
  }
  expandItem(indx): void {
    // debugger;
    // this.items.map(listItem => {          
    //         listItem.expanded = false;
          
    //     });
      
    // this.items[indx].expanded = !this.items[indx].expanded;
    if ( this.items[indx].expanded) {
      this.items[indx].expanded = false;
    } else {
      this.items.map(listItem => {
        if ( this.items[indx] == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  getStudentDetail(id){
    // debugger;
     this.authService.studentDetailByStudentId(id).subscribe(resp=>{
       this.studentDetail = resp;
     })
  }
}

 
