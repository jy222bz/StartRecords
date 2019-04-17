import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable()
export class AuthenticationService {
    user: any = null;

    constructor(private firebaseAuth: AngularFireAuth) {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn() {
        this.firebaseAuth.authState.subscribe(
            res => {
                if (res && res.uid) {
                    this.user = res;
                }
            }
        );
    }

    signup(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.firebaseAuth
                .auth
                .createUserWithEmailAndPassword(email, password)
                .then(value => {
                    this.user = value;
                    resolve(value);
                })
                .catch(err => {
                    reject(err.message);
                });
        })
    }


    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.firebaseAuth
                .auth
                .signInWithEmailAndPassword(email, password)
                .then(value => {
                    this.user = value;
                    resolve(value);
                })
                .catch(err => {
                    reject(err.message);
                });
        });
    }

    logout() {
        this.firebaseAuth
            .auth
            .signOut();
        this.user = null;
    }

    isAuthenticated() {
        return this.user != null;
    }

    isAdmin() {
        return true;
    }

}
