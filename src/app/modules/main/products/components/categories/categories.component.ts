import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CategoriesService} from "../../../../../shared/services/categoreis/categories.service";
import {Category} from "../../../../../shared/models/categories/category";
import {EventsService} from "../../../../../shared/services/events.service";

@Component({
    selector: 'app-main-home-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {

    visible = false;
    categories: Category[] = [];

    @Output() categoryChanged = new EventEmitter<Category>();

    constructor(
        private categoriesService: CategoriesService,
        private eventsService: EventsService,
        ) {

    }

    ngOnInit(): void {
        this.get();
        this.registerShowEvent();
    }

    ngOnDestroy(): void {
        this.eventsService.unregisterEvent('HOME-CATEGORIES-SHOW', this);
    }

    private registerShowEvent() {
        this.eventsService.registerEvent('HOME-CATEGORIES-SHOW', this, () => {
            this.visible = true;
        });
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
        this.hideCategories();
        this.categoryChanged.emit(element);
    }

    hideCategories() {
        this.visible = false;
    }

    getScale(element) {
        if (element.scale === undefined) {
            return 'scale(1.0)';
        }
         return 'scale(' + element.scale + ')';
    }
}
