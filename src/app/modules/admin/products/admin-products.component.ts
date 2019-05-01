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
    displayedColumns = ['image', 'name', 'created_at', 'edit'];

    constructor(
        private productsService: ProductsService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.getTotal();
        this.get();
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(AddComponent, {autoFocus: true, width: '480px'});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.add(result);
            }
        });
    }


    // ----------------------
    openProductDeleteComponent(element) {
        const ref = this.dialog.open(DeleteComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.delete(result);
            }
        });
    }

    // ----------------------
    get() {
        const subscription = this.productsService.get(this.pageIndex, this.pageSize)
            .subscribe(
                (data) => {
                    this.set(data);
                    subscription.unsubscribe();
                },
                (error) => {
                    subscription.unsubscribe();
                }
            )
        ;
    }

    getTotal() {
        this.productsService.getMeta().subscribe(
            (data) => {
                this.setTotal(data.total);
            },
            (error) => {

            }
        )
    }
}

