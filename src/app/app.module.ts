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
import {SignupComponent} from "./components/signup/signup.component";
import {LogoutComponent} from "./components/logout/logout.component";


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        LoginComponent,
        SignupComponent,
        LogoutComponent,
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
        LoginComponent,
        SignupComponent,
        LogoutComponent,
    ]
})
export class AppModule {
}
