import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../../../shared/services/products/products.service";
import {Product} from "../../../../../shared/models/products/product";

@Component({
    selector: 'app-main-home-deal',
    templateUrl: './deal.component.html',
    styleUrls: ['./deal.component.scss'],
})
export class DealComponent implements OnInit {
    product: Product = null;

    constructor(
        private productsService: ProductsService,
    ) {

    }

    ngOnInit(): void {
        this.get();
    }

    afterImageLoaded(event) {

    }

    // ----------------------
    get() {
        this.productsService.getDealOfDayProduct()
            .then((next) => {
                this.product = next;

            })
            .catch((error) => {
                console.log(error);
            });
    }

}


