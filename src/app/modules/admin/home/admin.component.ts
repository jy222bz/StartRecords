import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";


class Tile {
    text: string;
    url: string;
}

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
    tools: Tile[] = [
        {
            text: 'Albums',
            url: '/admin/products',
        },
        {
            text: 'Categories',
            url: '/admin/categories',
        },
    ];

    constructor(
        private dialog: MatDialog,
        private router: Router,
    ) {

    }

    ngOnInit(): void {

    }
}

