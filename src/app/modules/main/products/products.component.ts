import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../shared/services/products/products.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

    products = [];

    constructor(
        private productsService: ProductsService,
    ) {

    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    get() {
        const subscription = this.productsService.get()
            .subscribe((data) => {
                this.products = data;
                subscription.unsubscribe();
            })
        ;
    }

}


