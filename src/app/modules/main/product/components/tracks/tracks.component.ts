import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ItemsComponent} from "../../../../../shared/components/items/items.component";
import {ProductTracksService} from "../../../../../shared/services/products/product-tracks.service";
import {Track} from "../../../../../shared/models/tracks/track";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-main-product-tracks',
    templateUrl: './tracks.component.html',
})
export class TracksComponent extends ItemsComponent<Track> implements OnInit {
    displayedColumns = ['name', 'created_at', 'file', 'duration', 'edit'];

    @Input() productId;

    constructor(
        private activatedRoute: ActivatedRoute,
        private tracksService: ProductTracksService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    get() {
        const subscription = this.tracksService.get(this.productId).subscribe(
            (data) => {
                console.log(data);
                this.set(data);
                subscription.unsubscribe();
            },
            (error) => {
                subscription.unsubscribe();
            }
        );

    }
}

