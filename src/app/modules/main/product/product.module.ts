import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../../components.module";
import {ProductComponent} from "./product.component";
import {ProductService} from "../../../shared/services/products/product.service";
import {ProductRoutingModule} from "./product.routing.module";
import {MaterialModule} from "../../../material.module";
import {RatingComponent} from "./components/rating/rating.component";
import {TracksComponent} from "./components/tracks/tracks.component";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        CommonModule,
        ProductRoutingModule,
    ],
    declarations: [
        ProductComponent,
        TracksComponent,
        RatingComponent,

    ],
    providers: [
        ProductService,
    ],
    entryComponents: []
})
export class ProductModule {
}
