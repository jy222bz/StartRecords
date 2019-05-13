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
    _rating = 0;

    @Input()
    set rating(value: number) {
        if (value === undefined) {
            return;
        }
        this._rating = value;
        this.updateRating(value);
    }

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
    }

    updateRating(value: number, rated: boolean = true) {
        for (let i = 0; i < value; ++i) {
            this.stars[i].rated = rated;
        }
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

    // -----------------
    getUserRating() {
        let subscription = this.productRatingsService.get(this.productId, this.authenticationService.getAccountId())
            .subscribe((next) => {
                    if (next.size > 0) {
                        this.rated = true;

                    }
                    subscription.unsubscribe();
                },
                (error) => {
                    subscription.unsubscribe();
                }
            );
    }

    setUserRating(elem: RateElement): void {
        if (this.rated) {
            return;
        }
        this.productRatingsService.add(this.productId, this.authenticationService.getAccountId(), elem.id)
            .then((next) => {
                this.rated = true;

                // get total rating

                this.updateRating(elem.id);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

