import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoriesService} from "../../../../../../../shared/services/categoreis/categories.service";
import {Category} from "../../../../../../../shared/models/categories/category";

@Component({
    selector: 'app-main-home-products-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

    _visible = false;
    categories: Category[] = [];

    constructor(private categoriesService: CategoriesService) {

    }

    @Input()
    set visible(value) {
        this._visible = value;
    }

    @Output() categoryChanged = new EventEmitter<Category>();

    ngOnInit(): void {
        this.get();
    }


    get() {
        const subscription = this.categoriesService.get()
            .subscribe((data) => {
                this.categories = data;
                subscription.unsubscribe();
            })
        ;
    }

    changeCategory(element) {
        this.categoryChanged.emit(element);
    }

    hideCategories() {
        this._visible = false;
    }

    elementMouseMove(event, element) {
        if (event.target.nodeName !== 'LI') {
            return;
        }
        let middle = event.target.offsetHeight / 2;
        if (event.offsetY <= middle) {
            element.scaleSize = 1 + (event.offsetY / middle);
        } else {
            element.scaleSize = (1 - ((event.offsetY - middle) / middle)) + 1;
        }
    }

    elementMouseLeave(element) {
        element.scaleSize = 1;
    }

    getScaleSize(element) {
        if (element.scaleSize === undefined) {
            return 'scale(1.0)';
        }
         return 'scale(' + element.scaleSize + ')';
    }
}


