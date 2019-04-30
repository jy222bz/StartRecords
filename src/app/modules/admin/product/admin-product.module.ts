import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../../components.module";
import {AdminProductComponent} from "./admin-product.component";
import {ProductService} from "../../../shared/services/products/product.service";
import {AdminProductRoutingModule} from "./admin-product.routing.module";
import {MaterialModule} from "../../../material.module";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        CommonModule,
        AdminProductRoutingModule,
    ],
    declarations: [
        AdminProductComponent,

    ],
    providers: [
        ProductService,
    ],
    entryComponents: []
})
export class AdminProductModule {
}
