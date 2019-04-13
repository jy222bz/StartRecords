import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule?chunkName=home',
    },
    {
        path: 'admin/categories',
        loadChildren: './modules/admin/categories/categories.module#CategoriesModule?chunkName=categories',
    },
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
