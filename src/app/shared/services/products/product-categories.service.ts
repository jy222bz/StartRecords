import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import {Category} from '../../models/categories/category';

@Injectable()
export class ProductCategoriesService {
    constructor(private afs: AngularFirestore) {

    }

    get(id) {
        return new Promise((resolve, reject) => {
            this.afs.collection('products').doc(id).get()
                .subscribe(
                    (next) => {
                        const subscription = this.afs.collection<Category>('categories').get().subscribe(
                            (data) => {
                                const res = [];
                                data.docs.forEach((item) => {
                                    next.data().categories.forEach((categoryId) => {
                                        if (item.id === categoryId) {
                                            res.push({
                                                id: item.id,
                                                name: item.data().name,
                                                description: item.data().description,
                                                count: item.data().count
                                            });
                                        }
                                    });
                                });
                                subscription.unsubscribe();
                                resolve(res);
                            },
                            (error) => {
                                reject(error);
                            }
                        );
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });
    }

    getAvailable(id): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.afs.collection('products').doc(id).get()
                .subscribe(
                    (next) => {
                        const subscription = this.afs.collection<Category>('categories').get().subscribe(
                            (data) => {
                                const res = [];
                                console.log(data.docs);
                                data.docs.forEach((item) => {
                                    let found = false;
                                    next.data().categories.forEach((categoryId) => {
                                        if (item.id === categoryId) {
                                            found = true;
                                        }
                                    });
                                    if (!found) {
                                        res.push({
                                            id: item.id,
                                            name: item.data().name,
                                            description: item.data().description,
                                            count: item.data().count
                                        });
                                    }
                                });

                                subscription.unsubscribe();
                                resolve(res);
                            },
                            (error) => {
                                reject(error);
                            }
                        );
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });
    }

    add(id, categoryId) {
        return this.afs.collection('products').doc(id).set({
            categories: firebase.firestore.FieldValue.arrayUnion(categoryId)
        }, {
            merge: true
        });
    }

    delete(id, categoryId) {
        return this.afs.collection('products').doc(id).set({
            categories: firebase.firestore.FieldValue.arrayRemove(categoryId)
        }, {
            merge: true
        });
    }
}
