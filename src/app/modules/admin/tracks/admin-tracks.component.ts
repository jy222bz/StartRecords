import {Component, OnInit} from '@angular/core';
import {AddComponent} from "./components/add/add.component";
import {MatDialog} from "@angular/material";
import {ItemsComponent} from "../../../shared/components/items/items.component";
import {TracksService} from "../../../shared/services/tracks/tracks.service";
import {Track} from "../../../shared/models/tracks/track";
import {ActivatedRoute, Router} from "@angular/router";
import {DeleteComponent} from "./components/delete/delete.component";


@Component({
    selector: 'app-admin-tracks',
    templateUrl: './admin-tracks.component.html',
})
export class AdminTracksComponent extends ItemsComponent<Track> implements OnInit {
    displayedColumns = ['select', 'name', 'duration'];
    productId = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private tracksService: TracksService,
        private dialog: MatDialog,
        private router: Router,
    ) {
        super();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.productId = params['id'];
            this.get();
        });
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(AddComponent, {
            autoFocus: true,
            width: '480px',
            data: {productId: this.productId}
        });
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.add(result);
            }
        });
    }

    // ----------------------
    openTrackDeleteComponent(element) {
        const ref = this.dialog.open(DeleteComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.delete(result);
            }
        });
    }

    // ----------------------
    navigateProducts() {
        this.router.navigate(['admin/products']);
    }

    // ----------------------
    get() {
        const subscription = this.tracksService.get(this.productId).subscribe(
            (data) => {
                this.set(data);
                subscription.unsubscribe();
            }
        );

    }
}

