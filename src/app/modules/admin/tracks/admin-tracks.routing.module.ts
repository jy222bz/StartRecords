import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminTracksComponent} from './admin-tracks.component';

const routes: Routes = [
    {path: '', component: AdminTracksComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminTracksRoutingModule {
}
