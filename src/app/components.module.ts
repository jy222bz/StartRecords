import {NgModule} from '@angular/core';
import {AlertComponent} from "./shared/components/alert/alert.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {CounterComponent} from "./shared/components/counter/counter.component";
import {DurationComponent} from "./shared/components/duration/duration.component";
import {SvgLoaderComponent} from "./shared/components/svg-loader/svg-loader.component";

@NgModule({
    declarations: [
        AlertComponent,
        PageNotFoundComponent,
        CounterComponent,
        DurationComponent,
        SvgLoaderComponent,
    ],
    imports: [],
    exports: [
        AlertComponent,
        PageNotFoundComponent,
        CounterComponent,
        DurationComponent,
        SvgLoaderComponent,
    ]
})
export class ComponentsModule {
}
