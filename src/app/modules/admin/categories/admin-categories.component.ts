import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../shared/services/categoreis/categories.service";
import {AddComponent} from "./components/add/add.component";
import {MatDialog} from "@angular/material";
import {Category} from "../../../shared/models/categories/category";
import {ItemsComponent} from "../../../shared/components/items/items.component";


@Component({
    selector: 'app-admin-categories',
    templateUrl: './admin-categories.component.html',
})
export class AdminCategoriesComponent extends ItemsComponent<Category> implements OnInit {
    displayedColumns = ['select', 'name'];

    constructor(
        private categoriesService: CategoriesService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(AddComponent, {autoFocus: true, width: '480px'});
        ref.afterClosed().subscribe(result => {

        });
    }

    // ----------------------
    get() {
        this.categoriesService.get().subscribe(
            (data) => {
                console.log(data);
                this.set(data);
            }
        );
    }
}

