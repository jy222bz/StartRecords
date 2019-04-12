import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from "./material.module";
import {FirebaseModule} from "./firebase.module";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        LoginComponent,
        ToolbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FirebaseModule,
        MaterialModule


    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
