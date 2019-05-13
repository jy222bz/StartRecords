import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {element} from "protractor";
import {ProductService} from "../../../../../shared/services/products/product.service";
import {BasketService} from "../../../../../shared/services/basket/basket.service";
import {AuthenticationService} from "../../../../../shared/services/authentication.service";
import {EventsService} from "../../../../../shared/services/events.service";
import {ActivatedRoute} from "@angular/router";

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
        // private productService: RatingService,
    ) {

    }

    ngOnInit() {

    }
    rate(elem: RateElement): void {
        if (this.rating != -1) {
            return;
        }
        for (let i = 0; i < elem.id; ++i) {
            this.stars[i].rated = true;
        }
        this.rating = elem.id;
    }

    mouseOver(elem: RateElement) {
        if (this.rating != -1) {
            return;
        }
        for (let i = 0; i < elem.id; ++i) {
            this.stars[i].rated = true;
        }
    }

    mouseLeave(elem: RateElement) {
        if (this.rating != -1) {
            return;
        }
        for (let i = 0; i < elem.id; ++i) {
            this.stars[i].rated = false;
        }
    }
}

