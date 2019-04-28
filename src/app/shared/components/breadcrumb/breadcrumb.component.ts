import {Component, Input, OnInit} from '@angular/core';

import './breadcrumb.component.css';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

    currentValue = '';
    _value: any;

    @Input()
    set value(value: any) {

    }

    get value() {
        return this._value;
    }


    ngOnInit(): void {

    }



}


