import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";


@Injectable()
export class ProductsService {
    constructor(private afs: AngularFirestore) {

    }

    get() {
        return this.afs.collection<Product>('products').snapshotChanges();
    }

    add(args) {
        return this.afs.collection('products').add(args)

            ;
    }


}
