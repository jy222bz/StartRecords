import {Injectable} from '@angular/core';
import {Product} from '../../models/products/product';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase/app';


@Injectable()
export class ProductsService {
    constructor(private afs: AngularFirestore) {

    }

    has(name) {
        const queryFn = ref => ref.where('name', '==', name);
        return this.afs.collection<Product>('products', queryFn).snapshotChanges()
            ;
    }

    get(categoryId = '') {
        let query = ref => ref
            .where('categories', 'array-contains', categoryId)
        ;


        if (categoryId === '') {
            return this.afs.collection<Product>('products',
                ref => ref
                    .orderBy('name', 'asc')
            ).snapshotChanges()
                .pipe(map(actions => {
                        return actions.map(item => {
                            return new Product(item.payload.doc);
                        });
                    }
                ));
        } else {
            return this.afs.collection<Product>('products', query).snapshotChanges()
                .pipe(map(
                    actions => {
                        return actions.map(item => {
                            return new Product(item.payload.doc);
                        });
                    }
                ));
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
                });
        });
    }

    getTotal() {
        return this.afs.collection<any>('products_meta').doc('Pi6SrXqroqWqdzhPsUD4').get()
            .pipe(map(
                actions => {
                    return actions.data().total;
                }));
    }

    setDealOfDay(productId, discount) {
        return this.afs.collection<any>('products_meta').doc('Pi6SrXqroqWqdzhPsUD4').set({
            dealOfDay: productId,
            dealOfDayDiscount: discount
        }, {
            merge: true
        });
    }

    getDealOfDay() {
        return this.afs.collection<any>('products_meta').doc('Pi6SrXqroqWqdzhPsUD4').get()
            .pipe(map(
                actions => {
                    return {
                        productId: actions.data().dealOfDay,
                        discount: actions.data().dealOfDayDiscount,
                    };
                }));
    }

    getDealOfDayProduct(): Promise<Product> {

        return new Promise((resolve, reject) => {
            const subscription = this.getDealOfDay()
                .subscribe(
                    (next) => {
                        subscription.unsubscribe();
                        if (next.productId === undefined || next.productId === '') {
                            reject('deal of day is not set');
                            return;
                        }
                        this.afs.collection<any>('products').doc(next.productId).get()
                            .pipe(map(
                                actions => {
                                    return new Product(actions);
                                }))
                            .subscribe(
                                (product) => {
                                    product.discount = next.discount;
                                    resolve(product);
                                },
                                (error) => {
                                    reject(error);
                                }
                            );
                    },
                    (error) => {
                        subscription.unsubscribe();
                        reject(error);
                    }
                );
        });
    }
}
