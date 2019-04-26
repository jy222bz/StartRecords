import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin.routing.module';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../material.module";
import {ComponentsModule} from "../../components.module";
import {AdminComponent} from "./admin.component";
import {SidenavComponent} from "../../modules/admin/sidenav/sidenav.component";
import {CategoriesService} from "../../shared/services/categoreis/categories.service"
import {ProductsModule} from "./products/products.module";
import {CategoriesComponent} from "./categories/categories.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminRoutingModule,
        ProductsModule,
    ],
    declarations: [
        AdminComponent,
        SidenavComponent,
        CategoriesComponent,
    ],
    providers: [
        CategoriesService,
    ],
    entryComponents: [
        CategoriesComponent,
    ]
})
export class AdminModule {
}

