import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from "./material.module";
import {FirebaseModule} from "./firebase.module";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {ComponentsModule} from "./components.module";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthenticationService} from "./shared/services/authentication.service";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ToolbarComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FirebaseModule,
        MaterialModule,
        ComponentsModule,
        AppRoutingModule,

    ],
    providers: [
        AuthenticationService,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
