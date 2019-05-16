import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../../components.module";
import {AdminOrderComponent} from "./admin-order.component";
import {AdminOrderRoutingModule} from "./admin-order.routing.module";
import {MaterialModule} from "../../../material.module";
import {SharedModule} from "../../../shared.module";
import {OrderService} from "../../../shared/services/orders/order.service";
import {OrderDetailsService} from "../../../shared/services/orders/order-details.service";
import {StatusComponent} from "./components/status/status.component";
import {OrderDetailsComponent} from "./components/details/order-details.component";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        CommonModule,
        SharedModule,
        AdminOrderRoutingModule,
    ],
    declarations: [
        AdminOrderComponent,
        StatusComponent,
        OrderDetailsComponent,
    ],
    providers: [
        OrderService,
        OrderDetailsService,
    ],
    entryComponents: [
        StatusComponent,
    ]
})
export class AdminOrderModule {
}
