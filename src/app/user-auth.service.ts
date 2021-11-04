import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) {}

  url = 'https://groupbackend.herokuapp.com/';

  token = '1eef31a091e8582786d3ab68db0e7104d0ad2530';

  // create new user
  createUser(username: string, email: string, password: string) {
    return this.http.post(
      this.url + 'users/create/',
      {
        username: username,
        password: password,
        email: email,
      },
      {
        headers: {
          Authorization: 'Token ' + this.token,
        },
      }
    );
  }


  // login user
  loginUser(username: string, password: string) {
    return this.http.post(
      this.url + 'auth/login/',
      {
        username: username,
        password: password,
      },
      {
        headers: {
          Authorization: 'Token ' + this.token,
        },
      }
    );
  }
}
