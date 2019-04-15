import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../shared/services/categoreis/categories.service";


@Component({
    selector: 'app-admin-categories',
    templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {

    constructor(
        private categoriesService: CategoriesService,
    ) {

    }

    ngOnInit(): void {
        this.get();
    }


    get() {
        this.categoriesService.get();
    }

}


