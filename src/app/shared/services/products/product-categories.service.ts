import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";


@Injectable()
export class ProductCategoriesService {
    constructor(private afs: AngularFirestore) {

    }
    // array-contains
    get(id) {
        return this.afs.collection<Product>('products').doc(id).get();
    }

    add(id, args = null) {

        return this.afs.collection('products').doc(id).set({
            'sdfsdfsdf': 1
        }, {
            merge: true
        });
    }

    set(id, args = null) {
    return this.afs.collection('products').doc(id).set(args, {
        merge: true
    });
}

    delete(id) {
        return this.afs.collection('products').doc(id).delete();
    }
}
