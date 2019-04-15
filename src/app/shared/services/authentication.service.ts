import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";


@Injectable()
export class AuthenticationService {

    // This website is useful
    // https://alligator.io/angular/firebase-authentication-angularfire2/
    constructor(private angularFireAuth: AngularFireAuth) {

    }

    signup() {

    }

    login(email, password) {

    }

    logout() {

    }
}
