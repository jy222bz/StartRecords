import {Injectable} from '@angular/core';
import {Product} from '../../models/products/product';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from "firebase/app";

@Injectable()
export class ProductRatingsService {
    constructor(private afs: AngularFirestore) {

    }

    // user done with rating => total rate

    add(productId: string, userId: string, rate: number) {
        return this.afs.collection('product_ratings').add({
            userId: userId,
            productId: productId,
            rate: rate,
        });
    }

    get(productId: string, userId: string) {
        return this.afs.collection('product_ratings',
            ref => ref
                .where('productId', '==', productId)
                .where('userId', '==', userId)
        ).get();
    }
}
