import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    categoryId = '';
    categoryName = 'All Albums';

    constructor() {

    }

    ngOnInit(): void {
    }

    categoryChanged(element) {
        this.categoryId = element.id;
        this.categoryName = element.name;
    }
}


