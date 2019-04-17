import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";


@Component({
    selector: 'app-admin',
    templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

    constructor(
        private dialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------


    // ----------------------

    get() {

    }
}

