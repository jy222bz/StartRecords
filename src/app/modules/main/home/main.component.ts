import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    categoriesVisible = false;
    categoryId = '';
    categoryName = 'All';

    constructor() {

    }

    ngOnInit(): void {
    }


    showCategories() {
        this.categoriesVisible = true;
    }

    categoryChanged(element) {
        this.categoryId = element.id;
        this.categoryName = element.name;
        this.categoriesVisible = false;
    }
}


