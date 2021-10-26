import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public name: string = "Vardenis";

  constructor() {
  }

  ngOnInit(): void {
  }

  public printDetails(): void {
    console.log(this.name);
  }
}
