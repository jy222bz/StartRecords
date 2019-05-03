import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/products/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../shared/models/products/product";
import {ModifyComponent} from "../../admin/product/components/modify/modify.component";
import {MatDialog} from "@angular/material";
import {ItemsComponent} from "../../../shared/components/items/items.component";



@Component({
    selector: 'app-admin-product',
    templateUrl: './admin-product.component.html',
    styleUrls: ['./admin-product.component.css']
})

export class AdminProductComponent extends ItemsComponent<Product> implements OnInit {
    product: Product = new Product();

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,

    ) {
        super();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.product.id = params['id'];
            this.load();
        });
    }

    openModifyDialog() {
        const ref = this.dialog.open(ModifyComponent, {autoFocus: true, width: '480px'});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.modify(result);
            }
        });
    }

    load() {
        const subscription = this.productService.get(this.product.id).subscribe(
            (next) => {
                this.product = next;
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

    get() {
    }
}



