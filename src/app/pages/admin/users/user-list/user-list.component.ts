import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // My Apprach for this page would be similar to post-list page. 
  // I would do get request and call it from the component to display data  

  constructor() { }

  ngOnInit(): void {
  }

}
