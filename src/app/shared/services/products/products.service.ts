import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";


@Injectable()
export class ProductsService {
    constructor(private afs: AngularFirestore) {

    }

    has(name) {
        return this.afs.collection<Product>('products',
            ref => ref.where('name', '==', name)).snapshotChanges()

            ;
    }

    get() {
        return this.afs.collection<Product>('products').snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => ({
                        id: item.payload.doc.id,
                        name: item.payload.doc.data().name,
                        producer: item.payload.doc.data().producer,
                        artist: item.payload.doc.data().artist,
                        price: item.payload.doc.data().price,
                        duration: item.payload.doc.data().duration,
                        cover: item.payload.doc.data().cover,
                        description: item.payload.doc.data().description,
                        total: item.payload.doc.data().total,
                    }))
                }));
    }

    add(args) {

        return this.afs.collection<Product>('products').add(args)

            ;
    }

}
