import {Component, OnInit} from '@angular/core';
import {AddComponent} from "./components/add/add.component";
import {MatDialog} from "@angular/material";
import {ItemsComponent} from "../../../shared/components/items/items.component";
import {TracksService} from "../../../shared/services/tracks/tracks.service";
import {Track} from "../../../shared/models/tracks/track";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-admin-tracks',
    templateUrl: './admin-tracks.component.html',
})
export class AdminTracksComponent extends ItemsComponent<Track> implements OnInit {
    displayedColumns = ['select', 'name'];
    productId = '';

    constructor(
        private route: ActivatedRoute,
        private tracksService: TracksService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.productId = params['id'];
            this.get();
        });
        this.get();
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(AddComponent, {autoFocus: true, width: '480px', data: {productId: this.productId}});
        ref.afterClosed().subscribe(result => {

        });
    }

    // ----------------------
    get() {
        this.tracksService.get(this.productId).subscribe(
            (data) => {
                console.log(data);
                this.set(data);
            }
        );

    }
}

