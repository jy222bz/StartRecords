import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../shared/services/categoreis/categories.service";
import {AddComponent} from "./components/add/add.component";
import {MatDialog} from "@angular/material";


@Component({
    selector: 'app-admin-categories',
    templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {

    constructor(
        private categoriesService: CategoriesService,
        private dialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
        this.get();
    }


    get() {
        this.categoriesService.get();
    }

    openAddDialog (){
        const ref = this.dialog.open(AddComponent, {autoFocus: true, width: '480px' });
        ref.afterClosed().subscribe( result =>
        {

        });

    }
}

