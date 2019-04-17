import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./shared/services/authentication.service";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        private dialog: MatDialog
    ) {

    }

    ngOnInit(): void {

    }

}
