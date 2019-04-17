import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material.module';

import {MainRoutingModule} from './main.routing.module';

import {MainComponent} from './main.component';
import {ComponentsModule} from "../../components.module";
import {FooterComponent} from "./components/footer/footer.component";


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        MainRoutingModule,
    ],
    declarations: [
        MainComponent,
        FooterComponent,
    ],
    providers: [

    ],
    entryComponents: []
})
export class MainModule {
}
