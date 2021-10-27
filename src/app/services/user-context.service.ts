import {Injectable, OnDestroy} from '@angular/core';
import {UserDetails} from "../models/user-details";

@Injectable({
  providedIn: 'root'
})
export class UserContextService {
  private _userDetails: UserDetails = new UserDetails();

  constructor() {
    const userDetailsFromStorage = localStorage.getItem("userDetails");

    if (userDetailsFromStorage)
      this._userDetails = JSON.parse(userDetailsFromStorage);
  }

  public printUserDetails(): void {
    console.log(this._userDetails);
  }

  public getUserDetails(): UserDetails {
    return this._userDetails;
  }

  public setUserDetails(newUserDetails: UserDetails) {
    localStorage.setItem("userDetails", JSON.stringify(newUserDetails));
    this._userDetails = newUserDetails;
  }
}
