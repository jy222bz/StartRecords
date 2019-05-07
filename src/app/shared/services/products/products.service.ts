import {Injectable} from '@angular/core';
import {Product} from '../../models/products/product';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase/app';
import {ProductMeta} from '../../models/products/product-meta';


@Injectable()
export class ProductsService {
    constructor(private afs: AngularFirestore) {

    }

    has(name) {
        const queryFn = ref => ref.where('name', '==', name);
        return this.afs.collection<Product>('products', queryFn).snapshotChanges()
            ;
    }

    get(pageIndex, pageSize, categoryId = '') {
        if (categoryId === '') {
            return this.afs.collection<Product>('products',
                ref => ref
                    .orderBy('name', 'asc')
                    .limit(pageSize)
            ).snapshotChanges()
                .pipe(map(
                    actions => {
                        return actions.map(item => (
                                new Product(
                                    item.payload.doc.id,
                                    item.payload.doc.data().name,
                                    item.payload.doc.data().producer,
                                    item.payload.doc.data().artist,
                                    item.payload.doc.data().price,
                                    item.payload.doc.data().duration,
                                    item.payload.doc.data().cover,
                                    item.payload.doc.data().description,
                                    item.payload.doc.data().total,
                                    item.payload.doc.data().createdAt,
                                    item.payload.doc.data().year,
                                    item.payload.doc.data().columnSpan,
                                    item.payload.doc.data().rowSpan,
                                )
                            )
                        );
                    }
                ))
                ;
        } else {
            return this.afs.collection<Product>('products',
                ref => ref
                    .where('categories', 'array-contains', categoryId)
                    .limit(pageSize)
            ).snapshotChanges()
                .pipe(map(
                    actions => {
                        return actions.map(item => (
                                new Product(
                                    item.payload.doc.id,
                                    item.payload.doc.data().name,
                                    item.payload.doc.data().producer,
                                    item.payload.doc.data().artist,
                                    item.payload.doc.data().price,
                                    item.payload.doc.data().duration,
                                    item.payload.doc.data().cover,
                                    item.payload.doc.data().description,
                                    item.payload.doc.data().total,
                                    item.payload.doc.data().createdAt,
                                    item.payload.doc.data().year,
                                    item.payload.doc.data().columnSpan,
                                    item.payload.doc.data().rowSpan,
                                )
                            )
                        );
                    }
                ))
                ;
        }


    }

    add(args) {
        args.createdAt = firestore.FieldValue.serverTimestamp();
        return new Promise((resolve, reject) => {
            this.afs.collection<Product>('products').add(args)
                .then((next) => {
                    this.afs.collection('products_meta').doc('Pi6SrXqroqWqdzhPsUD4').update(
                        {
                            total: firestore.FieldValue.increment(1)
                        })
                        .then((next) => {

                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    args.id = next.id;
                    args.createdAt = (new Date()).toLocaleString();
                    resolve(args);

                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    getMeta() {
        return this.afs.collection<ProductMeta>('products_meta').doc('Pi6SrXqroqWqdzhPsUD4').get()
            .pipe(map(
                actions => {
                    return new ProductMeta(
                        actions.data().total,
                    );
                }));
    }
}
