import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserDetails} from "../../models/user-details";
import {UserContextService} from "../../services/user-context.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  public agreement: number = 1;
  public userDetails?: UserDetails;

  constructor(public userContext: UserContextService) {
    this.userContext.printUserDetails();
  }

  ngOnInit(): void {
    this.userDetails = this.userContext.getUserDetails();
  }

  public validateName(): boolean {
    // !undefined - true
    // !0 - true
    // !123- false
    // !!undefined- false

    return !!this.userDetails && this.userDetails.name.length > 2;
  }

  public agreementCheckboxValueChanged(): void {
    console.log(`Vartotojas ${this.agreement ? "sutiko" : "nesutiko"} su sąlygomis`);
  }

  ngOnDestroy(): void {
    console.log("Komponentas sunaikintas!");
  }

  public saveUserDetails(): void {
    if (this.userDetails) {
      this.userContext.setUserDetails(this.userDetails);
    }
  }
}
