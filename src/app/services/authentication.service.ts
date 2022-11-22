import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;
  constructor() { }
  isAuthenticated() {
    return this.isLoggedIn;
  }
  setAuthentication(isAuth) {
    this.isLoggedIn = isAuth;
  }
}
