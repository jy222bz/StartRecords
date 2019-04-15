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
import {FooterComponent} from "./components/footer/footer.component";
import {MenuComponent} from "./components/menu/menu.component";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ToolbarComponent,
        MenuComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FirebaseModule,
        MaterialModule,
        ComponentsModule,
        AppRoutingModule,

    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
