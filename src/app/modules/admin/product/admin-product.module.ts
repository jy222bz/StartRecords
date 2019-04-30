import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../../components.module";
import {AdminProductComponent} from "./admin-product.component";
import {ProductService} from "../../../shared/services/products/product.service";
import {AdminProductRoutingModule} from "./admin-product.routing.module";
import {MaterialModule} from "../../../material.module";
import {TracksComponent} from "./components/tracks/tracks.component";
import {ProductTracksService} from "../../../shared/services/products/product-tracks.service";
import {ProductTrackService} from "../../../shared/services/products/product-track.service";
import {TracksAddComponent} from "./components/tracks/components/add/tracks-add.component";
import {TracksDeleteComponent} from "./components/tracks/components/delete/tracks-delete.component";
import {CategoriesAddComponent} from "./components/categories/components/add/categories-add.component";
import {CategoriesDeleteComponent} from "./components/categories/components/delete/categories-delete.component";
import {ProductCategoriesService} from "../../../shared/services/products/product-categories.service";
import {CategoriesComponent} from "./components/categories/categories.component";
import {CategoriesService} from "../../../shared/services/categoreis/categories.service";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        CommonModule,
        AdminProductRoutingModule,
    ],
    declarations: [
        AdminProductComponent,
        TracksComponent,
        TracksAddComponent,
        TracksDeleteComponent,

        CategoriesComponent,
        CategoriesAddComponent,
        CategoriesDeleteComponent,
    ],
    providers: [
        ProductService,
        ProductTracksService,
        ProductTrackService,

        CategoriesService,

        ProductCategoriesService,
    ],
    entryComponents: [
        TracksAddComponent,
        TracksDeleteComponent,

        CategoriesAddComponent,
        CategoriesDeleteComponent,
    ]
})
export class AdminProductModule {
}
