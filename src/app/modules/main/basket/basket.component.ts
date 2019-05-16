import {Component, OnInit} from '@angular/core';
import {ItemsComponent} from '../../../shared/components/items/items.component';
import {BasketService} from '../../../shared/services/basket/basket.service';
import {MatDialog} from '@angular/material';
import {DeleteComponent} from './components/delete/delete.component';
import {ProductBasket} from '../../../shared/models/products/product-basket';
import {EditComponent} from './components/edit/edit.component';
import {OrdersService} from "../../../shared/services/orders/orders.service";
import {OrderDetailsService} from "../../../shared/services/orders/order-details.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../shared/services/authentication.service";

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

    working = false;

    constructor(
        private basketService: BasketService,
        private ordersService: OrdersService,
        private orderDetailsService: OrderDetailsService,
        private authenticationService: AuthenticationService,
        private dialog: MatDialog,
        private router: Router
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


    confirm() {
        //
        this.working = true;

        let items = [];
        this.dataSource.data.forEach(item => {
            items.push({
                id: item.id,
                count: item.count,
                price: item.price,
            });
        });
        console.log(items);


        this.ordersService.add({
                albums: this.basketService.getCount(),
                price: this.total,
                userId: this.authenticationService.getAccountId(),
                status: 0,
            },
            items
        )
            .then((next) => {
                console.log(next);


            })
            .catch((error) => {

                this.working = false;
                console.log(error);
            })

    }

    navigateAddress() {
        this.router.navigate(['/user/address']);
    }
}


