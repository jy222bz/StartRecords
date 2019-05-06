import {NgModule} from '@angular/core';
import {AlertComponent} from "./shared/components/alert/alert.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {CounterComponent} from "./shared/components/counter/counter.component";
import {DurationComponent} from "./shared/components/duration/duration.component";

@NgModule({
    declarations: [
        AlertComponent,
        PageNotFoundComponent,
        CounterComponent,
        DurationComponent,
    ],
    imports: [],
    exports: [
        AlertComponent,
        PageNotFoundComponent,
        CounterComponent,
        DurationComponent,
    ]
})
export class ComponentsModule {
}
