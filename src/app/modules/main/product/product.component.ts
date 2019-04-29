import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/products/product.service";
import {Product} from "../../../shared/models/products/product";
import {ActivatedRoute, Route} from "@angular/router";


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    product: any = {};

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.product.id = params['id'];
            this.load();
        });
    }

    load() {
        const subscription = this.productService.get(this.product.id).subscribe(
            (next) => {
                console.log(next.data());
                this.product = next.data();
                subscription.unsubscribe();
            },
            (error) => {
                subscription.unsubscribe();
            }
        )
    }
}



