import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../../../../shared/services/products/products.service";
import {EventsService} from "../../../../../shared/services/events.service";
import {MatDialog} from "@angular/material";
import {FilterComponent} from "./components/filter/filter.component";
import {WindowRef} from "../../../../../shared/directives/WindowRef";

@Component({
    selector: 'app-main-home-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {

    products = [];
    pageIndex = 0;
    pageSize = 20;

    columns = 3;
    rowHeight = 42;

    _categoryId = '';

    filterData = {
        filter: 0,
        value: 0,
        sortType: 'asc',
        sortField: 0,
    };

    constructor(
        private productsService: ProductsService,
        private eventsService: EventsService,
        private dialog: MatDialog,
        private winRef: WindowRef,
    ) {
        eventsService.registerEvent('HOME-FILTER-SHOW', this, () => {
            this.openFilterComponent();
        });
        this.calcHeight(winRef.nativeWindow.innerWidth);
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
        this.calcHeight(event.target.innerWidth);
    }

    calcHeight(width) {
        if (width < 400) {
            this.columns = 1;
        } else if (width < 600) {
            this.columns = 1;
        } else if (width < 960) {
            this.columns = 2;
        } else if (width < 1280) {
            this.columns = 3;
        } else {
            this.columns = 3;
        }

        if (this.columns < 3) {
            this.rowHeight = 49;
        } else {
            this.rowHeight = 29;
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

    getRowHeight() {
        return this.rowHeight + 'vw';
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
                    if (this.filterData.filter !== 0) {
                        data = data.filter((item) => {
                            if (this.filterData.filter === 1) {
                                return item.price == this.filterData.value;
                            } else if (this.filterData.filter === 2) {
                                return item.year == this.filterData.value;
                            } else if (this.filterData.filter === 3) {
                                return item.getRating() == this.filterData.value;
                            }
                        });
                    }

                    if (this.filterData.sortField > 0) {
                        data.sort((a, b) => {
                            let ret = 0;
                            if (this.filterData.sortField === 1) {

                                if (a.price < b.price) {
                                    ret = -1;
                                }
                                if (a.price > b.price) {
                                    ret = 1;
                                }
                            } else if (this.filterData.sortField === 2) {
                                if (a.year < b.year) {
                                    ret = -1;
                                }
                                if (a.year > b.year) {
                                    ret = 1;
                                }
                            } else if (this.filterData.sortField === 3) {
                                if (a.getRating() < b.getRating()) {
                                    ret = -1;
                                }
                                if (a.getRating() > b.getRating()) {
                                    ret = 1;
                                }
                            }
                            if (this.filterData.sortType === 'desc') {
                                ret = -1 * ret;
                            }
                            return ret;
                        });
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


