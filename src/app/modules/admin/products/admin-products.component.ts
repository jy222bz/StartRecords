import {Component, OnInit} from '@angular/core';
import {AddComponent} from "./components/add/add.component";
import {MatDialog} from "@angular/material";
import {ItemsComponent} from "../../../shared/components/items/items.component";
import {ProductsService} from "../../../shared/services/products/products.service";
import {Product} from "../../../shared/models/products/product";
import {DeleteComponent} from "./components/delete/delete.component";


@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
})
export class AdminProductsComponent extends ItemsComponent<Product> implements OnInit {
    displayedColumns = ['image', 'name', 'artist', 'producer', 'price', 'duration', 'edit'];

    constructor(
        private productsService: ProductsService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(AddComponent, {autoFocus: true, width: '480px'});
        ref.afterClosed().subscribe(result => {

        });
    }


    // ----------------------
    openProductDeleteComponent(element) {
        const ref = this.dialog.open(DeleteComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {

        });
    }

    // ----------------------
    get() {
        this.productsService.get().subscribe(
            (data) => {
                console.log(data);
                this.set(data);
            }
        );
    }
}

