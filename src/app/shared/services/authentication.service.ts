import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable()
export class AuthenticationService {
    user: any;

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
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {

                console.log('Success!', value);
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }


    login(email: string, password: string) {
        console.log(email);
        console.log(password);
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                this.user = value;
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    logout() {
        this.firebaseAuth
            .auth
            .signOut();
    }

    isAuthenticated() {
        return this.user != undefined;
    }


}
