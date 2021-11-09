import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {AccessService} from "../../services/access.service";
import {MessagesService} from "../../services/messages.service";
import {NotificationType} from "../../models/notification";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(private accessService: AccessService,
              private messagesService: MessagesService,
              private router: Router) {
    this.user = {
      username: "",
      password: ""
    };
  }

  ngOnInit(): void {
  }

  public login(): void {
    this.accessService.login(this.user).subscribe({
      next: (response) => {
        console.log(response);

        this.accessService.setToken(response.token);

        this.router.navigate(["items"]);
      },
      error: () => {
        this.messagesService.postMessage({
          message: "Invalid details",
          type: NotificationType.Error
        });
      }
    });
  }
}
