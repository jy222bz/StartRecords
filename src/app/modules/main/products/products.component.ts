import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FilterComponent} from "./components/filter/filter.component";
import {ProductsService} from "../../../shared/services/products/products.service";
import {EventsService} from "../../../shared/services/events.service";
import {MatDialog} from "@angular/material";
import {WindowRef} from "../../../shared/directives/WindowRef";
import {Router} from "@angular/router";
import {Product} from "../../../shared/models/products/product";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    categoryName = 'Albums';
    _categoryId = '';

    products: Product[] = [];

    columns = 3;
    rowHeight = 29;


    filterData = {
        filter: 0,
        value: 0,
        sortType: 'asc',
        sortField: 0,
    };


    constructor(private productsService: ProductsService,
                private eventsService: EventsService,
                private dialog: MatDialog,
                private winRef: WindowRef,
                private router: Router,
    ) {

    }

    ngOnInit(): void {
        this.get();
        this.calcHeight(this.winRef.nativeWindow.innerWidth);
    }

    ngOnDestroy(): void {

    }


    categoryChanged(element) {
        this.categoryId = element.id;
        this.categoryName = element.name;
    }


    @Input()
    set categoryId(value) {
        this._categoryId = value;
        this.get();
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

        if (this.columns == 2) {
            this.rowHeight = 54;
        } else if (this.columns == 1) {
            this.rowHeight = 70;
        } else {
            this.rowHeight = 29;
        }
    }

    getColumnSpan(element): number {
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

    navigate(element) {
        this.router.navigate(['/product/' + element.id]);
    }

    // ----------------------
    get() {
        const subscription = this.productsService.get(this._categoryId)
            .subscribe((data) => {
                    if (this.filterData.filter !== 0) {
                        data = data.filter((item) => {
                            if (this.filterData.filter === 1) {
                                return item.price == this.filterData.value;
                            } else if (this.filterData.filter === 2) {
                                return item.year == this.filterData.value;
                            } else if (this.filterData.filter === 3) {
                                return item.ratingCalc == this.filterData.value;
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
                                if (a.ratingCalc < b.ratingCalc) {
                                    ret = -1;
                                }
                                if (a.ratingCalc > b.ratingCalc) {
                                    ret = 1;
                                }
                            }
                            if (this.filterData.sortType === 'desc') {
                                ret = -1 * ret;
                            }
                            return ret;
                        });
                    }
                    console.log(data);
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


