import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../../../../shared/services/products/products.service";
import {EventsService} from "../../../../../shared/services/events.service";
import {MatDialog} from "@angular/material";
import {FilterComponent} from "./components/filter/filter.component";

@Component({
    selector: 'app-main-home-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {

    products = [];
    pageIndex = 0;
    pageSize = 20;

    columns = 4;
    _categoryId = '';

    filterData = {
        filter: 0,
        value: 0,
    };

    constructor(
        private productsService: ProductsService,
        private eventsService: EventsService,
        private dialog: MatDialog,
    ) {
        eventsService.registerEvent('HOME-FILTER-SHOW', this, () => {
            this.openFilterComponent();
        });
    }

    @Input()
    set categoryId(value) {
        this._categoryId = value;
        this.get();
    }

    ngOnInit(): void {
        this.get();
    }

    ngOnDestroy(): void {
        this.eventsService.unregisterEvent('HOME-FILTER-SHOW', this);
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

    openFilterComponent() {
        const ref = this.dialog.open(FilterComponent, {autoFocus: true, width: '480px', data: this.filterData});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.filterData = result;
                this.get();
            }
        });
    }

    // ----------------------
    get() {
        const subscription = this.productsService.get(this.pageIndex, this.pageSize, this._categoryId)
            .subscribe((data) => {
                console.log(this.filterData);
                    if (this.filterData.filter !== 0) {
                        data = data.filter((item) => {
                            console.log(item);
                            if (this.filterData.filter === 1) {
                                return item.price == this.filterData.value;
                            } else if (this.filterData.filter === 2) {
                                return item.year == this.filterData.value;
                            }
                        })
                    }
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


