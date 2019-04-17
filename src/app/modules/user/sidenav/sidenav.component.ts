import {Component} from '@angular/core';
import {AddressComponent} from "../address/address.component";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {

    constructor(
        private dialog: MatDialog,
    ) {


    }

    openAddressComponent() {
        const ref = this.dialog.open(AddressComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {

            }
        });
    }
}
