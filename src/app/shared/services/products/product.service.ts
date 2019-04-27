import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";
import { firestore } from 'firebase/app';


@Injectable()
export class ProductService {
    constructor(private afs: AngularFirestore) {

    }

    get(id) {
        return this.afs.collection<Product>('products').doc(id).get();
    }

    set(id, args = null) {
        return this.afs.collection('products').doc(id).set(args, {
            merge: true
        });
    }

    delete(id) {
        // Delete tracks
        /*
        this.afs.collection('tracks', ref => ref.where('productId', '==', id))
            .delete();
        */
        // Delete product

        // Reduce categories

        return this.afs.collection('products').doc(id).delete();
    }

    updateDuration(id, duration) {
        return this.afs.collection('products').doc(id).update(
            {
                duration: firestore.FieldValue.increment(duration)
            });
    }
}
