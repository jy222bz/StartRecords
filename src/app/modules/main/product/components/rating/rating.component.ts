import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../../shared/services/authentication.service";
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
    rating = 3;
    rated = false;
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
        this.getUserRating();
        this.getRating();
    }

    getUserRating() {
        let subscription = this.productRatingsService.get(this.productId, this.authenticationService.getAccount().id)
            .subscribe((next) => {
                    if (next.size > 0) {
                        this.rated = true;
                        this.updateRating(5);
                    }
                    subscription.unsubscribe();
                },
                (error) => {
                    subscription.unsubscribe();
                }
            );
    }

    getRating() {
        this.updateRating(this.rating);
    }

    updateRating(rate: number, rated: boolean = true) {
        for (let i = 0; i < rate; ++i) {
            this.stars[i].rated = rated;
        }
    }

    rate(elem: RateElement): void {
        if (this.rated) {
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
        if (this.rated) {
            return;
        }
        this.updateRating(elem.id);
    }

    mouseLeave(elem: RateElement) {
        if (this.rated) {
            return;
        }
        this.updateRating(elem.id, false);
    }
}

