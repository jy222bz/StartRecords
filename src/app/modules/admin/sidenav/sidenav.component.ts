import {Component, OnInit} from '@angular/core';
import {ProductsComponent} from "../../admin/products/products.component";
import {MatDialog} from "@angular/material";
import {AuthenticationService} from "../../../shared/services/authentication.service";
//import {Router} from "@angular/router";


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit  {

    constructor(
        //private router: Router,
        private authenticationService: AuthenticationService,
        private dialog: MatDialog,
    ) {


    }

    ngOnInit() {
        this.get();
    }

    // -------------------
    openProductsComponent() {
        const ref = this.dialog.open(ProductsComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {

            }
        });
    }


    /*navigateCategories() {
        this.router.navigate(['']);
    }

    navigateMyAccount() {
        this.router.navigate(['admin/categories']);
    }*/

    // -------------------
    get() {
        const admin = this.authenticationService.isAdmin();
        console.log(admin);
    }

}
