import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, userData } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(public userService:UserServiceService,private router:Router) { }

  ngOnInit() {
  }

  /**
   * viewData : called when user clicks on view button to get details of individual user from list
   */
  public viewUser(id:number) {
    this.router.navigate(['user', id]);
  }
  //End of viewData function

  /**
   * deleteUser : called when user clicks on delete button on remove user from list
   */
  public deleteUser(deleteUser:userData) {
    this.userService.userList.data = this.userService.userList.data.filter(data => data.id!=deleteUser.id);
  }
  //End of deleteUser function

}
