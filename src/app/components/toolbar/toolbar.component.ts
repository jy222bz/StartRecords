import {Component} from '@angular/core';
import {AuthenticationService} from "../../shared/services/authentication.service";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";
import {LogoutComponent} from "../logout/logout.component";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
    title = 'Star Collection';


    constructor(
        private authenticationService: AuthenticationService,
        private dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {

    }

    openSignupComponent() {
        const ref = this.dialog.open(SignupComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {

            }
        });
    }

    openLoginComponent() {
        const ref = this.dialog.open(LoginComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {

            }
        });
    }

    openLogoutComponent() {
        const ref = this.dialog.open(LogoutComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {

            }
        });
    }
}
