import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";

@Component({
    selector: 'app-admin-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {

    @Input() url;
    @Input() text;
    @Input() color;
    @Input() icon;
    @Input() colspan;
    @Input() rowspan;

    constructor(
        private dialog: MatDialog,
        private router: Router,
    ) {

    }

    ngOnInit(): void {

    }

    navigate() {
        this.router.navigate([this.url]);
    }
}
