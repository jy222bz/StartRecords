import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";


@Injectable()
export class ProductService {
    constructor(private afs: AngularFirestore) {

    }

    get() {
        return this.afs.collection<Product>('products').snapshotChanges();
    }

    update(id, args = null) {
        return this.afs.collection('products').doc(id).set(args);

    }

    addDuration(id, duration) {
        this.afs.collection('products').doc(id).get().subscribe(
            (next) => {
                console.log(next.data());
                let data = next.data();
                data.duration += duration;
                this.afs.collection('products').doc(id).set(data).then(

                );
            }
        );
    }

    setImage(id, imageUrl) {
        this.afs.collection('products').doc(id).get().subscribe(
            (next) => {
                console.log(next.data());
                let data = next.data();
                data.image = imageUrl;
                this.afs.collection('products').doc(id).set(data).then(

                );
            }
        );
    }

}
