import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userData } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserServiceService,private router:Router) { }
  userDetail: userData;
  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') != null) { //null check for id
      let id: number = Number(this.route.snapshot.paramMap.get('id')); //access id passed via route
      if (this.userService.userList!=undefined) { //check if list is present in service
        let userData: userData[] = this.userService.userList.data;
        let matchingData: userData[] = userData.filter(resp => resp.id === id);
        if (matchingData.length > 0) {
          this.userDetail = matchingData[0]; // only one data will match this id
        }
      }else{ //Navigate to users list page if null is passed to this route
        this.router.navigateByUrl('/');
      }
    }
  }

}
