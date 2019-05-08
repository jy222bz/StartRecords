import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/products/product.service";
import {ActivatedRoute} from "@angular/router";
import {BasketService} from "../../../shared/services/basket/basket.service";
import {AuthenticationService} from "../../../shared/services/authentication.service";


@Component({
    selector: 'app-main-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    product: any = {};

    constructor(
        private productService: ProductService,
        private basketService: BasketService,
        private authenticationService: AuthenticationService,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.product.id = params['id'];
            this.load();
        });
    }

    buy() {
        if (this.authenticationService.isAdmin()) {
            alert('Login as user to be able to buy');
            return;
        }
        if (!this.authenticationService.isAuthenticated()) {

            return;
        }
        this.basketService.add(this.product.id);
    }

    load() {
        const subscription = this.productService.get(this.product.id).subscribe(
            (next) => {
                this.product = next;
                subscription.unsubscribe();
            },
            () => {
                subscription.unsubscribe();
            }
        )
    }
}



