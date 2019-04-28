import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../shared/services/authentication.service";


interface Tile {
    text: string;
    url: string;
    icon: string;
    cols: number;
    rows: number;
    color: string;
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
            cols: 1,
            rows: 1,
            icon: 'library_music',
            color: '#c2185b',
        },
        {
            text: 'Categories',
            url: '/admin/categories',
            cols: 1,
            rows: 1,
            icon: 'category',
            color: '#00796b',
        },
    ];

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {

    }

    ngOnInit(): void {

    }
}

