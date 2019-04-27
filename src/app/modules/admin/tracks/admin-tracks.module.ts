import {NgModule} from '@angular/core';


import {AdminTracksRoutingModule} from './admin-tracks.routing.module';

import {AdminTracksComponent} from './admin-tracks.component';
import {MaterialModule} from "../../../material.module";
import {AddComponent} from "./components/add/add.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {ComponentsModule} from "../../../components.module";
import {CommonModule} from "@angular/common";
import {TracksService} from "../../../shared/services/tracks/tracks.service";
import {ProductService} from "../../../shared/services/products/product.service";
import {TrackService} from "../../../shared/services/tracks/track.service";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminTracksRoutingModule,
    ],
    declarations: [
        AdminTracksComponent,
        AddComponent,
        DeleteComponent,
    ],
    providers: [
        TracksService,
        TrackService,
        ProductService,
    ],
    exports: [
        AdminTracksComponent,
        AddComponent
    ],

    entryComponents: [
        AddComponent,
        DeleteComponent,
    ]
})
export class AdminTracksModule {
}
