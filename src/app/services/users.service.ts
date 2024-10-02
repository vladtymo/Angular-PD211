import { Injectable } from '@angular/core';
import { IUser } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://jsonplaceholder.typicode.com/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    // working with server logic
    return this.httpClient.get<IUser[]>(api);
  }

  get(id: number): Observable<IUser> | null {
    return this.httpClient.get<IUser>(api + id);
  }
}
