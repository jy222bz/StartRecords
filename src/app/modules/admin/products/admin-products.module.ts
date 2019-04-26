import {NgModule} from '@angular/core';


import {AdminProductsRoutingModule} from './admin-products.routing.module';

import {AdminProductsComponent} from './admin-products.component';
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
        AdminProductsRoutingModule,
    ],
    declarations: [
        AdminProductsComponent,
        AddComponent,
        DeleteComponent,
        AdminProductsComponent,

    ],
    providers: [
        ProductsService,
    ],
    exports: [
        AdminProductsComponent,
        AddComponent,
    ],

    entryComponents: [
        AddComponent,
        DeleteComponent,
    ]
})
export class AdminProductsModule {
}