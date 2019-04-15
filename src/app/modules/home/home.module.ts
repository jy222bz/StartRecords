import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material.module';

import {HomeRoutingModule} from './home.routing.module';

import {HomeComponent} from './home.component';
import {ComponentsModule} from "../../components.module";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [

    ],
    entryComponents: []
})
export class HomeModule {
}
