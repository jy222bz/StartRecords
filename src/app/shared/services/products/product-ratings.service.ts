import {Injectable} from '@angular/core';
import {Product} from '../../models/products/product';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from "firebase/app";

@Injectable()
export class ProductRatingsService {
    constructor(private afs: AngularFirestore) {

    }

    add(productId, userId, rate) {
        return this.afs.collection<Product>('product_ratings').doc(productId).set({
            users: firebase.firestore.FieldValue.arrayUnion(userId)
        }, {
            merge: true
        });
    }

}
