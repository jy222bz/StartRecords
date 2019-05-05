import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

class BreadCrumb {

}

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {

    _breadcrumbs: [];

    @Input()
    set breadcrumbs(value) {
        this._breadcrumbs = value;
        this.update();
    }


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {

    }


    ngOnInit(): void {

    }


    update() {

    }

    navigate() {

    }

}


