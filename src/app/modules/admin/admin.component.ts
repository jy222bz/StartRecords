import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

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


