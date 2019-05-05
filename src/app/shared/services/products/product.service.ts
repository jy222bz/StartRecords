import {Injectable} from '@angular/core';
import {Product} from '../../models/products/product';
import {AngularFirestore} from '@angular/fire/firestore';
import {firestore} from 'firebase/app';
import {Track} from '../../models/tracks/track';
import {map} from 'rxjs/operators';


@Injectable()
export class ProductService {
    constructor(private afs: AngularFirestore) {

    }

    get(id) {
        return this.afs.collection<Product>('products').doc(id).get()
            .pipe(map(
                actions => {
                    return new Product(
                        actions.id,
                        actions.data().name,
                        actions.data().producer,
                        actions.data().artist,
                        actions.data().price,
                        actions.data().duration,
                        actions.data().cover,
                        actions.data().description,
                        actions.data().total,
                        actions.data().createdAt,
                        actions.data().columnSpan,
                        actions.data().rowSpan,
                    );
                }));
    }

    set(id, args = null) {
        return this.afs.collection('products').doc(id).set(args, {
            merge: true
        });
    }

    delete(id) {
        // Delete tracks
        const tracksSub = this.afs.collection<Track>('tracks',
            ref => ref.where('productId', '==', id)).snapshotChanges()
            .subscribe((next) => {
                next.forEach(item => {
                    this.afs.collection('product_tracks').doc(item.payload.doc.id).delete().then();
                });
                tracksSub.unsubscribe();
            });

        // Reduce categories


        // Delete product
        return this.afs.collection('products').doc(id).delete();
    }

    updateDuration(id, duration) {
        return this.afs.collection('products').doc(id).update(
            {
                duration: firestore.FieldValue.increment(duration)
            });
    }
}
