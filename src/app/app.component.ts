import {Component} from '@angular/core';
import {AuthenticationService} from './shared/services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'STAR COLLECTION';
    email: string;
    password: string;

constructor(public authService: AuthenticationService) {}

signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
}

login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
}

logout() {
    this.authService.logout();
}
}
