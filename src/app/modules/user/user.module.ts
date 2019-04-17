import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user.routing.module';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../material.module";
import {ComponentsModule} from "../../components.module";
import {UserComponent} from "./user.component";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        UserRoutingModule,
    ],
    declarations: [
        UserComponent,
    ],
    providers: [],
    entryComponents: []
})
export class UserModule {
}
