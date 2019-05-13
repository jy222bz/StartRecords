import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../../components.module";
import {MaterialModule} from "../../../material.module";
import {SharedModule} from "../../../shared.module";
import {BasketService} from "../../../shared/services/basket/basket.service";
import {BasketComponent} from "./basket.component";
import {BasketRoutingModule} from "./basket.routing.module";
import {TotalComponent} from "./components/total/total.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {EditComponent} from "./components/edit/edit.component";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        CommonModule,
        SharedModule,
        BasketRoutingModule,
    ],
    declarations: [
        BasketComponent,
        TotalComponent,
        DeleteComponent,
        EditComponent,

    ],
    providers: [
        BasketService,
    ],
    entryComponents: [
        DeleteComponent,
        EditComponent,
    ]
})
export class BasketModule {
}
