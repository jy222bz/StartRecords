import {NgModule} from '@angular/core';


import {CategoriesRoutingModule} from './categories.routing.module';

import {CategoriesComponent} from './categories.component';
import {MaterialModule} from "../../../material.module";
import {CategoriesService} from "../../../shared/services/categories.service";


@NgModule({
    imports: [
        MaterialModule,
        CategoriesRoutingModule,
    ],
    declarations: [
        CategoriesComponent,
    ],
    providers: [
        CategoriesService,
    ],
    entryComponents: []
})
export class CategoriesModule {
}
