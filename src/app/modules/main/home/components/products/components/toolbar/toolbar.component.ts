import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
    selector: 'app-main-home-products-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']

})
export class ToolbarComponent implements OnInit {
    _name = 'All';

    @Input()
    set name(value) {
        this._name = value;
    }

    @Output() categoriesVisible = new EventEmitter<boolean>();

    constructor() {
    }


    ngOnInit(): void {

    }

    showCategories() {
        this.categoriesVisible.emit(true);
    }
}
