import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/products/product.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-admin-product',
    templateUrl: './admin-product.component.html',
    styleUrls: ['./admin-product.component.css']
})

export class AdminProductComponent implements OnInit {
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
                this.product = next.data();
                subscription.unsubscribe();
            },
            (error) => {
                subscription.unsubscribe();
            }
        )
    }


    //
    edit() {

    }
}



