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
    ],
    providers: [
        ProductService,
        ProductTracksService,
        ProductTrackService,
    ],
    entryComponents: [
        TracksAddComponent,
        TracksDeleteComponent,
    ]
})
export class AdminProductModule {
}
