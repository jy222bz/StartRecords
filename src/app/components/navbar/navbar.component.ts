import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../shared/services/authentication.service";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {LogoutComponent} from "../logout/logout.component";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
    selector: 'app-toolbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    title = 'Star Collection';

    constructor(
        private authenticationService: AuthenticationService,
        private dialog: MatDialog,
        private router: Router,
    ) {
    }

    ngOnInit(): void {

    }

    openSignupComponent() {
        const ref = this.dialog.open(RegisterComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.navigateMyAccount();
            }
        });
    }

    openLoginComponent() {
        const ref = this.dialog.open(LoginComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.navigateMyAccount();
            }
        });
    }

    openLogoutComponent() {
        const ref = this.dialog.open(LogoutComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.navigateHome();
            }
        });
    }

    // ----------------
    navigateHome() {
        this.router.navigate(['']);
    }

    navigateMyAccount() {
        this.router.navigate([this.authenticationService.isAdmin() ? 'admin' : 'user']);
    }

}
