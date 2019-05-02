import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material.module';

import {MainRoutingModule} from './main.routing.module';

import {MainComponent} from './main.component';
import {ComponentsModule} from "../../components.module";
import {FooterComponent} from "./components/footer/footer.component";
import {ProductsComponent} from "./products/products.component";
import {ProductsService} from "../../shared/services/products/products.service";
import {ProductComponent} from "./products/components/product/product.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared.module";
import {ToolbarComponent} from "./products/components/toolbar/toolbar.component";
import {AdminProductsModule} from "../admin/products/admin-products.module";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        MainRoutingModule,
        CommonModule,
        SharedModule,
        AdminProductsModule,
    ],
    declarations: [
        MainComponent,
        FooterComponent,
        ProductsComponent,
        ProductComponent,
        ToolbarComponent,
    ],
    providers: [
        ProductsService,
    ],
    entryComponents: []
})
export class MainModule {
}
