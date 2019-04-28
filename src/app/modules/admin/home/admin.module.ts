import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin.routing.module';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../../material.module";
import {ComponentsModule} from "../../../components.module";
import {AdminComponent} from "./admin.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminRoutingModule,
    ],
    declarations: [
        AdminComponent,
    ],
    providers: [],
    entryComponents: []
})
export class AdminModule {
}
