import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../shared/services/authentication.service";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {LogoutComponent} from "../logout/logout.component";
import {ActivatedRoute, Router} from "@angular/router";
import {RegisterComponent} from "../register/register.component";
import {BasketService} from "../../shared/services/basket/basket.service";
import {EventsService} from "../../shared/services/events.service";
import {WindowRef} from "../../shared/directives/WindowRef";
import {fadeAnimation} from "../../shared/animations/fade-animation";



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
    title = 'StarRecords';
    homePage = false;
    className = '';


    @Input() defaultColor = '#ffffff';
    @Input() scrollColor = '#000000';

    fontColor = this.defaultColor;

    constructor(
        private authenticationService: AuthenticationService,
        private basketService: BasketService,
        private eventsService: EventsService,
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute,
        private winRef: WindowRef,
    ) {

    }

    ngOnInit(): void {
        this.registerLoginShowEvent();
        this.registerRouteChanges();
        this.registerScrollEvent();
    }

    private registerLoginShowEvent() {
        this.eventsService.registerEvent('LOGIN-SHOW', this, () => {
            this.openLoginComponent();
        });
    }

    private registerRouteChanges() {
        this.router.events.subscribe((val) => {
            this.homePage = this.router.url == '/';
            if (this.homePage) {
                this.defaultColor = '#ffffff';
            } else {
                this.defaultColor = '#000000';
            }
            this.fontColor = this.defaultColor;
        });
    }

    private registerScrollEvent() {
        this.winRef.nativeWindow.addEventListener('scroll', this.scroll, true);
    }

    private removeScrollEvent() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy(): void {
        this.removeScrollEvent();
    }

    scroll = (event: any): void => {
        const top = event.srcElement.scrollTop;
        if (top == 0) {
            this.className = '';
            this.fontColor = this.defaultColor;
        } else {
            this.className = 'app-navbar-dark';
            this.fontColor = this.scrollColor;
        }


    };

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
