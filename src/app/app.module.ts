import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from "./material.module";
import {FirebaseModule} from "./firebase.module";
import {ComponentsModule} from "./components.module";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthenticationService} from "./shared/services/authentication.service";
import {RegisterComponent} from "./components/register/register.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {UserService} from "./shared/services/user/user.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
        FirebaseModule,
        MaterialModule,
        ComponentsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent

    ],
    providers: [
        UserService,
        AuthenticationService,
    ],
    bootstrap: [
        AppComponent,
    ],
    entryComponents: [
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
    ]
})
export class AppModule {
}
