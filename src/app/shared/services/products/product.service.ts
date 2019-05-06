import {Injectable} from '@angular/core';
import {Product} from '../../models/products/product';
import {AngularFirestore} from '@angular/fire/firestore';
import {Track} from '../../models/tracks/track';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase/app';


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
                        actions.data().year,
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

        // Decrease products
        this.afs.collection('products_meta').doc('Pi6SrXqroqWqdzhPsUD4').update(
            {
                total: firestore.FieldValue.increment(-1)
            })
            .then((next) => {

            })
            .catch((error) => {

            });

        return new Promise((resolve, reject) => {
            this.afs.collection('products').doc(id).get()
                .subscribe(
                    (next) => {
                        const categories = next.data().categories;
                        if (categories !== undefined) {
                            categories.forEach((categoryId) => {
                                this.afs.collection('categories').doc(categoryId).update(
                                    {
                                        count: firestore.FieldValue.increment(-1)
                                    })
                                    .then(() => {
                                        resolve();
                                    })
                                    .catch((error) => {
                                        reject(error);
                                    });
                            });
                        }
                        this.afs.collection('products').doc(id).delete()
                            .then(() => {
                                resolve();
                            })
                            .catch((error) => {
                                reject(error);
                            })
                        ;
                    }
                )
            ;

        });
    }
}
