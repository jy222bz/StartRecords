import {Component, OnInit} from '@angular/core';
import {AddressComponent} from "../address/address.component";
import {MatDialog} from "@angular/material";
import {AuthenticationService} from "../../../shared/services/authentication.service";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit  {

    constructor(
        private authenticationService: AuthenticationService,
        private dialog: MatDialog,
    ) {


    }

    ngOnInit() {
        this.get();
    }

    // -------------------
    openAddressComponent() {
        const ref = this.dialog.open(AddressComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {

            }
        });
    }

    // -------------------
    get() {
        const user = this.authenticationService.getUser();
        console.log(user);
    }

}
