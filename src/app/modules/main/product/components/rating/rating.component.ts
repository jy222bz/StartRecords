import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {element} from "protractor";
import {ProductService} from "../../../../../shared/services/products/product.service";
import {BasketService} from "../../../../../shared/services/basket/basket.service";
import {AuthenticationService} from "../../../../../shared/services/authentication.service";
import {EventsService} from "../../../../../shared/services/events.service";
import {ActivatedRoute} from "@angular/router";
import {ProductRatingsService} from "../../../../../shared/services/products/product-ratings.service";

class RateElement {
    id: number;
    rated: boolean;
}

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
    @Input() rating = -1;
    @Input() productId: string;

    stars: RateElement[] = [
        {id: 1, rated: false},
        {id: 2, rated: false},
        {id: 3, rated: false},
        {id: 4, rated: false},
        {id: 5, rated: false},
    ];

    constructor(
        private productRatingsService: ProductRatingsService,
        private authenticationService: AuthenticationService,
    ) {

    }

    ngOnInit() {
        this.getRating();
    }

    getRating() {
        let subscription = this.productRatingsService.get(this.productId, this.authenticationService.getAccount().id)
            .subscribe((next) => {
                    if (next.size > 0) {
                        this.rating = 5;
                        this.updateRating(5);
                    }
                    subscription.unsubscribe();
                },
                (error) => {
                    subscription.unsubscribe();
                }
            );
    }

    updateRating(rate: number, rated: boolean = true) {
        for (let i = 0; i < rate; ++i) {
            this.stars[i].rated = rated;
        }
    }

    rate(elem: RateElement): void {
        if (this.rating != -1) {
            return;
        }
        this.updateRating(elem.id);
        this.rating = elem.id;

        this.productRatingsService.add(this.productId, this.authenticationService.getAccount().id, this.rating)
            .then((next) => {

            })
            .catch((error) => {

            })
    }

    mouseOver(elem: RateElement) {
        if (this.rating != -1) {
            return;
        }
        this.updateRating(elem.id);
    }

    mouseLeave(elem: RateElement) {
        if (this.rating != -1) {
            return;
        }
        this.updateRating(elem.id, false);
    }
}

