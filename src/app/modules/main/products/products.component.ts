import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../shared/services/products/products.service";
import {ItemsComponent} from "../../../shared/components/items/items.component";
import {Product} from "../../../shared/models/products/product";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends ItemsComponent<Product> implements OnInit {

    constructor(
        private productsService: ProductsService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    get() {
        const subscription = this.productsService.get()
            .subscribe((data) => {
                this.set(data);
                subscription.unsubscribe();
            })
        ;
    }

}


