import {NgModule} from '@angular/core';
import {MaterialModule} from '../../../material.module';

import {MainRoutingModule} from './main.routing.module';

import {MainComponent} from './main.component';
import {ComponentsModule} from "../../../components.module";
import {FooterComponent} from "./components/footer/footer.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductsService} from "../../../shared/services/products/products.service";
import {ProductComponent} from "./components/products/components/product/product.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared.module";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {AdminProductsModule} from "../../admin/products/admin-products.module";
import {CategoriesComponent} from "./components/categories/categories.component";
import {CategoriesService} from "../../../shared/services/categoreis/categories.service";
import {DealComponent} from "./components/deal/deal.component";


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
        CategoriesComponent,
        DealComponent,
    ],
    providers: [
        ProductsService,
        CategoriesService,
    ],
    entryComponents: []
})
export class MainModule {
}
