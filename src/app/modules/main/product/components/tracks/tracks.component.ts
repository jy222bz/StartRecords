import {Component, Input, OnInit} from '@angular/core';
import {ItemsComponent} from "../../../../../shared/components/items/items.component";
import {ProductTracksService} from "../../../../../shared/services/products/product-tracks.service";
import {Track} from "../../../../../shared/models/tracks/track";
import {ActivatedRoute} from "@angular/router";
import {AudioPlayerService} from "../../../../../shared/services/audio-player.service";


@Component({
    selector: 'app-main-product-tracks',
    templateUrl: './tracks.component.html',
})
export class TracksComponent extends ItemsComponent<Track> implements OnInit {
    displayedColumns = ['name', 'created_at', 'duration', 'play'];

    @Input() productId;

    constructor(
        private activatedRoute: ActivatedRoute,
        private tracksService: ProductTracksService,
        private audioPlayerService: AudioPlayerService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    play(item) {
        this.audioPlayerService.play(item.sample);
    }



    // ----------------------
    get() {
        const subscription = this.tracksService.get(this.productId).subscribe(
            (data) => {
                this.set(data);
                subscription.unsubscribe();
            },
            (error) => {
                subscription.unsubscribe();
            }
        );

    }
}

