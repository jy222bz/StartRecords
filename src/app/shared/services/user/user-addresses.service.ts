import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {UserAddress} from "../../models/users/user-address";


@Injectable()
export class UserAddressesService {


    constructor(private afs: AngularFirestore) {

    }

    get(id, args = null) {
        return this.afs.collection<UserAddress>('users/' + id).valueChanges();
    }

    add(args) {

    }

    delete(args) {

    }

}
