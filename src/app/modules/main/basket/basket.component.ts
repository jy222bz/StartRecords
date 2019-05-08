import {Component, OnInit} from '@angular/core';
import {ItemsComponent} from "../../../shared/components/items/items.component";
import {BasketService} from "../../../shared/services/basket/basket.service";
import {MatDialog} from "@angular/material";
import {DeleteComponent} from "./components/delete/delete.component";
import {ProductBasket} from "../../../shared/models/products/product-basket";

@Component({
    selector: 'app-main-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss'],
})
export class BasketComponent extends ItemsComponent<ProductBasket> implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/', home: true},
        {label: 'Basket', params: '', url: '/basket', home: false}
    ];
    displayedColumns = ['name', 'price', 'count', 'edit', 'total'];
    total = 0;

    constructor(
        private basketService: BasketService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    openProductDeleteComponent(element) {
        const ref = this.dialog.open(DeleteComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed()
            .subscribe((next) => {
                if (next) {
                    this.delete(next);
                    this.updateTotal();
                }
            });
    }

    // ----------------------
    get() {
        this.basketService.get()
            .then((next) => {
                this.set(next);
                this.updateTotal();
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    }


    // ----------------------
    updateTotal() {
        let totalPrice = 0;
        this.dataSource.data.forEach((item) => {
            totalPrice += item.price * item.count;
        });
        this.total = totalPrice;
    }

    getTotal() {
        return this.total;
    }
}


