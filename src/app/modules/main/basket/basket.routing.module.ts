import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductComponent} from "./product.component";
import {BasketComponent} from "./basket.component";

const routes: Routes = [
    {path: '', component: BasketComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasketRoutingModule {
}
