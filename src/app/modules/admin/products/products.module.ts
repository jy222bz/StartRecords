import {NgModule} from '@angular/core';


import {ProductsRoutingModule} from './products.routing.module';

import {ProductsComponent} from './products.component';
import {MaterialModule} from "../../../material.module";
import {AddComponent} from "./components/add/add.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {ComponentsModule} from "../../../components.module";
import {CommonModule} from "@angular/common";
import {ProductsService} from "../../../shared/services/products/products.service";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        ProductsRoutingModule,
    ],
    declarations: [
        ProductsComponent,
        AddComponent,
        DeleteComponent,
        ProductsComponent,

    ],
    providers: [
        ProductsService,
    ],
    exports: [
        ProductsComponent,
        AddComponent,
    ],

    entryComponents: [
        AddComponent,
        DeleteComponent,
    ]
})
export class ProductsModule {
}
