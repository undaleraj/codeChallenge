import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './service/user-service.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'users-task';

  constructor(private userService:UserServiceService){}

  ngOnInit(){
    this.userService.getUser().subscribe( //Call API on initial load
      (resp:User) => {
        this.userService.userList = resp;
      },
      (err) =>{
        console.log(err);
      }
    );
  }
}
