import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/main/main.module#MainModule',
    },
    {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule',
    },
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule',
    },
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
