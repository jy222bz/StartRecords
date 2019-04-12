import {NgModule} from '@angular/core';


import {CategoriesRoutingModule} from './categories.routing.module';

import {CategoriesComponent} from './categories.component';
import {MaterialModule} from "../../../material.module";
import {CategoriesService} from "../../../shared/services/categoreis/categories.service";
import {AddComponent} from "./components/add/add.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {ComponentsModule} from "../../../components.module";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        CategoriesRoutingModule,
    ],
    declarations: [
        CategoriesComponent,
        AddComponent,
        DeleteComponent,
    ],
    providers: [
        CategoriesService,
    ],
    entryComponents: [
        AddComponent,
        DeleteComponent,
    ]
})
export class CategoriesModule {
}
