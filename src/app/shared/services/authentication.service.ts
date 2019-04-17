import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable()
export class AuthenticationService {
    user: any = null;

    constructor(private firebaseAuth: AngularFireAuth,
                private afs: AngularFirestore) {
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
                    this.createUser(value);
                    resolve(value);
                })
                .catch(err => {
                    reject(err.message);
                });
        });
    }

    createUser(result) {
        this.afs.collection('users').doc(result.user.uid).set({
            admin: false,
            addresses: {},
            country: ''
        })
            .then(() => {

            })
            .catch((error) => {

            });
    }

    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.firebaseAuth
                .auth
                .signInWithEmailAndPassword(email, password)
                .then(value => {
                    this.user = value;
                    this.checkIfAdmin(value).then(
                        () => {
                            resolve(value);
                        }
                    );
                })
                .catch(err => {
                    reject(err.message);
                });
        });
    }

    checkIfAdmin(data) {
        return new Promise((resolve, reject) => {
            this.afs.collection('users').doc(data.user.uid).get()
                .subscribe((result) => {
                    if (result.exists) {
                        console.log(result.data().admin);
                        this.user.admin = result.data().admin;
                    }
                    resolve();
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
        return this.user != null && this.user.admin === true;
    }


}
