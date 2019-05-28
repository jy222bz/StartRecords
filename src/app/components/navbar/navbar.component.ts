import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../shared/services/authentication.service";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {LogoutComponent} from "../logout/logout.component";
import {ActivatedRoute, Router} from "@angular/router";
import {RegisterComponent} from "../register/register.component";
import {BasketService} from "../../shared/services/basket/basket.service";
import {EventsService} from "../../shared/services/events.service";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
    title = 'StarRecords';
    homePage = false;

    constructor(
        private authenticationService: AuthenticationService,
        private basketService: BasketService,
        private eventsService: EventsService,
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.registerLoginShowEvent();
        this.registerRouteChanges();
    }

    private registerLoginShowEvent() {
        this.eventsService.registerEvent('LOGIN-SHOW', this, () => {
            this.openLoginComponent();
        });
    }

    private registerRouteChanges() {
        this.router.events.subscribe((val) => {
            this.homePage = this.router.url == '/';
        });
    }

    ngOnDestroy(): void {

    }

    getBasketTotal() {
        const total = this.basketService.getCount();
        if (total === 0) {
            return '';
        }
        return String(total);
    }

    openRegisterComponent() {
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
                this.basketService.clear();
                this.navigateHome();
            }
        });
    }

    openCategories() {
        this.eventsService.emit('HOME-CATEGORIES-SHOW');
    }

    openSearch() {
        this.eventsService.emit('HOME-CATEGORIES-SHOW');
    }


    // ----------------
    navigateHome() {
        this.router.navigate(['']);
    }

    navigateMyAccount() {
        this.router.navigate([this.authenticationService.isAdmin() ? 'admin' : 'user']);
    }

    navigateBasket() {
        this.router.navigate(['basket']);
    }

}
