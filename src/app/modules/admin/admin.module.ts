import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin.routing.module';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../material.module";
import {ComponentsModule} from "../../components.module";
import {AdminComponent} from "./admin.component";
import {CategoriesModule} from "./categories/categories.module";
import {UserAddressesService} from "../../shared/services/user/user-addresses.service";
import {ProductsModule} from "./products/products.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminRoutingModule,
        CategoriesModule,
        ProductsModule,
    ],
    declarations: [
        AdminComponent,
    ],
    providers: [
        UserAddressesService,
    ],
    entryComponents: []
})
export class AdminModule {
}
