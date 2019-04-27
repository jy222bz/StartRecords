import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";


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


        return this.afs.collection('products').doc(id).delete();
    }

    addDuration(id, duration) {
        this.afs.collection('products').doc(id).get().subscribe(
            (next) => {
                let data = next.data();
                data.duration += duration;
                this.afs.collection('products').doc(id).set(data).then(

                );
            }
        );
    }
}
