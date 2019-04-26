import {Component, OnInit} from '@angular/core';
import {AddComponent} from "./components/add/add.component";
import {MatDialog} from "@angular/material";
import {ItemsComponent} from "../../../shared/components/items/items.component";
import {ProductsService} from "../../../shared/services/products/products.service";
import {Product} from "../../../shared/models/products/product";


@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
})
export class AdminProductsComponent extends ItemsComponent<Product> implements OnInit {
    displayedColumns = ['select', 'image', 'name', 'artist', 'producer', 'price', 'duration'];

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
    get() {
        this.productsService.get().subscribe(
            (data) => {
                let products = data.map(actions => {
                    return {
                        id: actions.payload.doc.id,
                        name: actions.payload.doc.data().name,
                        producer: actions.payload.doc.data().producer,
                        artist: actions.payload.doc.data().artist,
                        price: actions.payload.doc.data().price,
                        duration: actions.payload.doc.data().duration,
                        imageUrl: actions.payload.doc.data().imageUrl,
                    }
                });
                this.set(products);
            }
        );
    }
}

