import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {


    breadcrumbs = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }))
            .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
            .subscribe(route => {

                let snapshot = this.router.routerState.snapshot;
                this.breadcrumbs = [];
                let url = snapshot.url;
                let routeData = route.snapshot.data;

                let label = routeData['breadcrumb'];
                let params = snapshot.root.params;

                this.breadcrumbs.push({
                    url: url,
                    label: label,
                    params: params
                });

            });
    }


    ngOnInit(): void {

    }


    navigate() {

    }

}


