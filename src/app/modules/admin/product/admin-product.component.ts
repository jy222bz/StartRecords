import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/products/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../shared/models/products/product";
import {EditComponent} from "./components/edit/edit.component";
import {MatDialog} from "@angular/material";


@Component({
    selector: 'app-admin-product',
    templateUrl: './admin-product.component.html',
    styleUrls: ['./admin-product.component.scss']
})

export class AdminProductComponent implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/admin', home: true},
        {label: 'Products', params: '', url: '/admin/products', home: false},
    ];
    product: Product = new Product();

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.product.id = params['id'];
            this.load();
        });
    }

    openEditComponent() {
        console.log(this.product);
        const ref = this.dialog.open(EditComponent, {autoFocus: true, width: '480px', data: this.product});
        ref.afterClosed().subscribe(result => {
            if (result) {
                console.log(result);
            }
        });
    }

    // -----------------------
    load() {
        const subscription = this.productService.get(this.product.id).subscribe(
            (next) => {
                this.product = next;
                this.breadcrumbs.push({label: next.name, params: '', url: '/admin/products/' + next.id, home: false});
                subscription.unsubscribe();
            },
            () => {
                subscription.unsubscribe();
            }
        )
    }
}



