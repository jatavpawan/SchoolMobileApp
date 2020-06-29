import { Component, OnInit } from '@angular/core';
import { ShardServiceService } from 'src/app/services/shard-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
studentID:number=0;
  public items: any = [ { 
    title:'Basic Information',
    icon:'../../../assets/img/graduation-cap.svg',
    expanded: false,
   data:{FirstName:'Pawan',MiddleName:'Kumar', LastName:'Jatav',
  Gender:'Male',DOB:'23-07-2011', BirthPlace:'Raipur', UIN:'76547865543',
   Nationality:'Indian',MotherTongue:'Hindi',cast:'Brahman', category:'genera', religion:'Hindu',BloodGroup:'O+'}
  },
      
      {  title:'Contact Information',
      icon:'../../../assets/img/address-book.svg',
    expanded: false },
      {  title:'Account Information',
      icon:'../../../assets/img/people-carry.svg',
    expanded: false },
      {  title:'User Login',
      icon:'../../../assets/img/sign-in-alt.svg',
    expanded: false },
    
     {  title:'Designation Report',
      icon:'../../../assets/img/file-alt.svg',
    expanded: false },  
     ];

  constructor( private activatedRoute: ActivatedRoute, private sharedservice: ShardServiceService) {
    
  }
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.studentID = params["id"];
  

    });
  }
  expandItem(indx): void {
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
}

 
