import {NgModule} from '@angular/core';


import {TracksRoutingModule} from './tracks.routing.module';

import {TracksComponent} from './tracks.component';
import {MaterialModule} from "../../../material.module";
import {AddComponent} from "./components/add/add.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {ComponentsModule} from "../../../components.module";
import {CommonModule} from "@angular/common";
import {TracksService} from "../../../shared/services/tracks/tracks.service";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        TracksRoutingModule,
    ],
    declarations: [
        TracksComponent,
        AddComponent,
        DeleteComponent,
    ],
    providers: [
        TracksService,
    ],
    exports: [
        TracksComponent,
        AddComponent
    ],

    entryComponents: [
        AddComponent,
        DeleteComponent,
    ]
})
export class TracksModule {
}
