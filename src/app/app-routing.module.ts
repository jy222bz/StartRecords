import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/main/home/main.module#MainModule',
    },
    {
        path: 'basket',
        loadChildren: './modules/main/basket/basket.module#BasketModule',
    },
    {
        path: 'admin',
        loadChildren: './modules/admin/home/admin.module#AdminModule',
    },
    {
        path: 'admin/categories',
        loadChildren: './modules/admin/categories/admin-categories.module#AdminCategoriesModule',
    },
    {
        path: 'admin/products',
        loadChildren: './modules/admin/products/admin-products.module#AdminProductsModule',
    },
    {
        path: 'admin/products/:id',
        loadChildren: './modules/admin/product/admin-product.module#AdminProductModule',
    },

    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule',
    },

    {
        path: 'product/:id',
        loadChildren: './modules/main/product/product.module#ProductModule',
    },

    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
