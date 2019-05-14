import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

    constructor(
        private dialog: MatDialog,
        private router: Router,
    ) {

    }

    ngOnInit(): void {

    }

    // ----------------
    navigateCategories() {
        this.router.navigate(['admin/categories']);
    }

    navigateProducts() {
        this.router.navigate(['admin/products']);
    }



}



