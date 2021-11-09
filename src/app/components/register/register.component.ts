import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {AccessService} from "../../services/access.service";
import {MessagesService} from "../../services/messages.service";
import {NotificationType} from "../../models/notification";
import {Router} from "@angular/router";
import {Observer, PartialObserver} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;

  constructor(private accessService: AccessService,
              private messagesService: MessagesService,
              private router: Router) {
    this.user = {
      username: "",
      password: ""
    }
  }

  ngOnInit(): void {
  }

  public register(): void {
    const observer: PartialObserver<Object> = {
      next: () => {
        // Kai ateina teigiamas (20x) atsakymas iš serverio
        this.messagesService.postMessage({
          message: "User registered",
          type: NotificationType.Success
        });

        this.router.navigate(["login"]);
      },
      error: () => {
        this.messagesService.postMessage({
          message: "User already exist",
          type: NotificationType.Error
        });
      }
    };

    this.accessService.registerUser(this.user)
      .subscribe(observer);
  }
}
