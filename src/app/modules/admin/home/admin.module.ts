import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin.routing.module';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../../material.module";
import {ComponentsModule} from "../../../components.module";
import {AdminComponent} from "./admin.component";
import {TileComponent} from "./components/tile/tile.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminRoutingModule,
    ],
    declarations: [
        AdminComponent,
        TileComponent,
    ],
    providers: [],
    entryComponents: []
})
export class AdminModule {
}
