import {Component, OnInit} from '@angular/core';
import {ItemsComponent} from "../../../shared/components/items/items.component";
import {Product} from "../../../shared/models/products/product";
import {BasketService} from "../../../shared/services/basket/basket.service";

@Component({
    selector: 'app-main-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss'],
})
export class BasketComponent extends ItemsComponent<Product> implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/', home: true},
        {label: 'Basket', params: '', url: '/basket', home: false}
    ];
    displayedColumns = ['name', 'count', 'price'];

    constructor(private basketService: BasketService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------


    // ----------------------
    get() {
        this.basketService.get()
            .then((next) => {
                this.set(next);
            })
            .catch((error) => {
                console.log(error);
            })
        ;
    }




}


