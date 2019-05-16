import {Component, OnInit} from '@angular/core';
import {ItemsComponent} from '../../../shared/components/items/items.component';
import {BasketService} from '../../../shared/services/basket/basket.service';
import {MatDialog} from '@angular/material';
import {DeleteComponent} from './components/delete/delete.component';
import {ProductBasket} from '../../../shared/models/products/product-basket';
import {EditComponent} from './components/edit/edit.component';
import {OrdersService} from "../../../shared/services/orders/orders.service";
import {OrderDetails} from "../../../shared/models/orders/order-details";
import {OrderDetailsService} from "../../../shared/services/orders/order-details.service";

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
        private ordersService: OrdersService,
        private orderDetailsService: OrderDetailsService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    openProductEditComponent(element) {
        const ref = this.dialog.open(EditComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed()
            .subscribe((next) => {
                if (next) {
                    if (next.count <= 0) {
                        this.delete(next);
                    } else {
                        this.updateItem(next);
                    }
                    this.updateTotal();
                }
            });
    }


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
    confirmBuy() {
        alert('Your buy has been confirmed.');
    }
}


