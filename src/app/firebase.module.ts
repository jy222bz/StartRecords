import {NgModule} from '@angular/core';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";


@NgModule({
    declarations: [],
    imports: [
        AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
    ],
    providers: [],
    bootstrap: []
})
export class FirebaseModule {
}
