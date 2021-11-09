import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  private _token?: string;

  constructor(private http: HttpClient) {
  }

  public setToken(token: string): void {
    this._token = token;
  }

  public get isLoggedIn(): boolean {
    return !!this._token;
  }

  public registerUser(user: User): Observable<Object> {
    return this.http.post("http://localhost:3000/api/user/register", user);
  }

  public login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("http://localhost:3000/api/user/login", user);
  }
}

export interface LoginResponse {
  token: string;
  msg: string;
}
