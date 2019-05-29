import {NgModule} from '@angular/core';
import {MaterialModule} from '../../../material.module';
import {MainRoutingModule} from './main.routing.module';
import {MainComponent} from './main.component';
import {ComponentsModule} from "../../../components.module";
import {ProductsService} from "../../../shared/services/products/products.service";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared.module";
import {DealComponent} from "./components/deal/deal.component";
import {ProductModule} from "../product/product.module";
import {WindowRef} from "../../../shared/directives/WindowRef";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        MainRoutingModule,
        CommonModule,
        SharedModule,
        ProductModule,
    ],
    declarations: [
        MainComponent,
        DealComponent,
    ],
    providers: [
        ProductsService,
        WindowRef,
    ],
    entryComponents: []
})
export class MainModule {
}
