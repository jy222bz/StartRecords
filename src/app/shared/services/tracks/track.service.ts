import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";
import {firestore} from "firebase";


@Injectable()
export class TrackService {
    constructor(private afs: AngularFirestore) {

    }

    get(id) {
        return this.afs.collection<Product>('tracks').doc(id).get();
    }

    set(id, args = null) {
        return this.afs.collection('tracks').doc(id).set(args, {
            merge: true
        });
    }

    delete(id) {
        return this.afs.collection('tracks').doc(id).delete();
    }
}
