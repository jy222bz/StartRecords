import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user.routing.module';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../material.module";
import {ComponentsModule} from "../../components.module";
import {UserComponent} from "./user.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {UserAddressesService} from "../../shared/services/user/user-addresses.service";
import {AddressComponent} from "./address/address.component";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        UserRoutingModule,
    ],
    declarations: [
        UserComponent,
        SidenavComponent,
        AddressComponent,
    ],
    providers: [
        UserAddressesService,
    ],
    entryComponents: [
        AddressComponent,
    ]
})
export class UserModule {
}
