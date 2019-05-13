import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {firestore} from "firebase";

@Injectable()
export class ProductRatingsService {
    constructor(private afs: AngularFirestore) {

    }

    add(productId: string, userId: string, rate: number) {
        return new Promise((resolve, reject) => {
            this.afs.collection('product_ratings').add({
                userId: userId,
                productId: productId,
                rate: rate,
            })
                .then((next) => {
                    this.afs.collection('products').doc(productId).set({
                        numberOfRatings: firestore.FieldValue.increment(1),
                        totalRatings: firestore.FieldValue.increment(rate)
                    }, {
                        merge: true
                    })
                        .then((data) => {
                            resolve();
                        })
                        .catch((error) => {
                            reject(error);
                        });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    get(productId: string, userId: string) {
        return this.afs.collection('product_ratings',
            ref => ref
                .where('productId', '==', productId)
                .where('userId', '==', userId)
        ).get();
    }
}
