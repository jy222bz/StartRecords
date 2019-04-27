import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";


@Component({
    selector: 'app-admin-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
    @Input() text;
    @Input() url;
    @Input() icon;

    constructor(
        private dialog: MatDialog,
        private router: Router,
    ) {

    }

    ngOnInit(): void {

    }

    // ----------------
    navigate() {
        this.router.navigate([this.url]);
    }

}

