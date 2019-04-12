import {NgModule} from '@angular/core';
import {AlertComponent} from "./shared/components/alert/alert.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

@NgModule({
    declarations: [
        AlertComponent,
        PageNotFoundComponent,
    ],
    imports: [],
    exports: [
        AlertComponent,
        PageNotFoundComponent,
    ]
})
export class ComponentsModule {
}
