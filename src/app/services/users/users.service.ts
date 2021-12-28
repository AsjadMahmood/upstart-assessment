import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private endpoint = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    // Add a request to get users using `endpoint`
    return this.http.get(this.endpoint)
  }

  getUserById(userId: number): Observable<Partial<User>> {
    return this.http.get(this.endpoint + `/${userId}`) as Observable<Partial<User>>
  }

}