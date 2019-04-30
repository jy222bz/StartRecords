import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ItemsComponent} from "../../../../../shared/components/items/items.component";
import {Track} from "../../../../../shared/models/tracks/track";
import {ActivatedRoute} from "@angular/router";
import {CategoriesAddComponent} from "./components/add/categories-add.component";
import {CategoriesDeleteComponent} from "./components/delete/categories-delete.component";
import {ProductCategoriesService} from "../../../../../shared/services/products/product-categories.service";


@Component({
    selector: 'app-product-categories',
    templateUrl: './categories.component.html',
})
export class CategoriesComponent extends ItemsComponent<Track> implements OnInit {
    displayedColumns = ['select', 'name'];

    _productId = '';

    @Input()
    set productId(productId: string) {
        this._productId = productId;
    }

    get productId(): string {
        return this._productId;
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private productCategoriesService: ProductCategoriesService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    openAddDialog() {
        console.log(this._productId);
        const ref = this.dialog.open(CategoriesAddComponent, {
            autoFocus: true,
            width: '480px',
            data: {productId: this._productId}
        });
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.add(result);
            }
        });
    }

    // ----------------------
    openCategoryDeleteComponent(element) {
        const ref = this.dialog.open(CategoriesDeleteComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.delete(result);
            }
        });
    }

    // ----------------------
    get() {
        const subscription = this.productCategoriesService.get(this.productId).subscribe(
            (data) => {
                this.set(data);
                subscription.unsubscribe();
            },
            (error) => {
                subscription.unsubscribe();
            }
        );

    }
}
