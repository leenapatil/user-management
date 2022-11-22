import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataManagementService {
  url: string = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get(this.url);
  }
}
