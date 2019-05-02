import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../shared/services/products/products.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

    products = [];
    pageIndex = 0;
    pageSize = 20;

    columns = 4;

    constructor(
        private productsService: ProductsService,
    ) {

    }

    ngOnInit(): void {
        this.get();
    }

    onResize(event) {
        if (event.target.innerWidth < 1920) {
            this.columns = 6;
        }
        if (event.target.innerWidth < 1280) {
            this.columns = 4;
        }
        if (event.target.innerWidth < 960) {
            this.columns = 3;
        }
        if (event.target.innerWidth < 600) {
            this.columns = 2;
        }
        if (event.target.innerWidth < 400) {
            this.columns = 1;
        }
    }

    // ----------------------
    get() {
        const subscription = this.productsService.get(this.pageIndex, this.pageSize)
            .subscribe((data) => {
                    this.products = data;
                    subscription.unsubscribe();
                },
                (error) => {
                    subscription.unsubscribe();
                }
            )
        ;
    }

}


