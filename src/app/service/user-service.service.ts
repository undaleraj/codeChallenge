import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public userList:User;
  constructor(private httpClient:HttpClient) { }

  /**
   * getUser : called to retrieve list of user from api
   */
  public getUser<User>():Observable<User>{
    return this.httpClient.get<User>('https://reqres.in/api/users');
  }
  //End of getUser function

}
