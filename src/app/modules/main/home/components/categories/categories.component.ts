import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoriesService} from "../../../../../shared/services/categoreis/categories.service";
import {Category} from "../../../../../shared/models/categories/category";

@Component({
    selector: 'app-main-home-categories',
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
                this.updateElements(data);

                subscription.unsubscribe();
            })
        ;
    }

    updateElements(data) {
        // find the lowest count
        //
        let min, max;
        if (data.length > 0) {
            min = data[0].count;
            max = data[0].count;
        }
        for (let i = 1; i < data.length; ++i) {
            if (data[i].count < min) {
                min = data[i].count;
            }
            if (data[i].count > max) {
                max = data[i].count;
            }
        }
        if (min == 0) {
            min = 1;
        }
        if (max === 0) {
            max = 1;
        }


        for (let i = 0; i < data.length; ++i) {
            data[i].scale = 1 + data[i].count *  min / max;
        }
        this.categories = data;
    }



    changeCategory(element) {
        this.categoryChanged.emit(element);
    }

    hideCategories() {
        this._visible = false;
    }

    elementMouseMove(event, element) {
        if (event.target.nodeName !== 'DIV') {
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

    getScale(element) {
        if (element.scale === undefined) {
            return 'scale(1.0)';
        }
         return 'scale(' + element.scale + ')';
    }
}


