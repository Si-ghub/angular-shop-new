import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {MessagesService} from "../services/messages.service";
import {NotificationType} from "../models/notification";
import {AccessService} from "../services/access.service";

// ng generate guard guards/pavadinimas
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router,
              private messagesService: MessagesService,
              private accessService: AccessService) {
  }

  canActivate(): boolean {
    if (this.accessService.isLoggedIn)
      return true;

    this.messagesService.postMessage({
      message: "You should log in.",
      type: NotificationType.Error
    });

    this.router.navigate(["login"]);
    return false;
  }
}
