import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";


@Injectable()
export class ProductCategoriesService {
    constructor(private afs: AngularFirestore) {

    }

    get(id) {
        return this.afs.collection<Product>('product_categories').doc(id).get();
    }

    add(id, args = null) {
        return this.afs.collection('product_categories').doc(id).set(args, {
            merge: true
        });
    }

    delete(id) {
        return this.afs.collection('product_categories').doc(id).delete();
    }
}
