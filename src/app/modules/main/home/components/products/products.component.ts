import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../../../../shared/services/products/products.service";

@Component({
    selector: 'app-main-home-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

    products = [];
    pageIndex = 0;
    pageSize = 20;

    columns = 4;
    _categoryId = '';

    constructor(
        private productsService: ProductsService,
    ) {

    }

    @Input()
    set categoryId(value) {
        this._categoryId = value;
        this.get();
    }

    ngOnInit(): void {
        this.get();
    }

    onResize(event) {
        if (event.target.innerWidth < 1920) {
            this.columns = 6;
        }
        if (event.target.innerWidth < 1280) {
            this.columns = 4;
        }
        if (event.target.innerWidth < 960) {
            this.columns = 3;
        }
        if (event.target.innerWidth < 600) {
            this.columns = 2;
        }
        if (event.target.innerWidth < 400) {
            this.columns = 1;
        }
    }

    getColumnSpan(element) {
        if (this.columns == 1) {
            return 1;
        }
        return element.columnSpan;
    }

    getRowSpan(element) {
        if (this.columns == 1) {
            return 1;
        }
        return element.rowSpan;
    }

    // ----------------------
    get() {
        const subscription = this.productsService.get(this.pageIndex, this.pageSize, this._categoryId)
            .subscribe((data) => {
                    this.products = data;
                    subscription.unsubscribe();
                },
                (error) => {
                    console.log(error);
                    subscription.unsubscribe();
                }
            )
        ;
    }

}

