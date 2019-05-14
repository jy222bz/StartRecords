import {Injectable} from '@angular/core';
import {Category} from "../../models/categories/category";
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from "rxjs/operators";
import {firestore} from 'firebase/app';
import {Order} from "../../models/orders/order";

@Injectable()
export class OrdersService {

    constructor(private afs: AngularFirestore) {

    }

    get(args = null) {
        return this.afs.collection<Order>('orders').snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => ({
                        id: item.payload.doc.id,
                        userId: item.payload.doc.data().userId,
                        price: item.payload.doc.data().price,
                        status: item.payload.doc.data().status,
                    }))
                }));
    }

    add(args) {
        args.created_at = firestore.FieldValue.serverTimestamp();
        return this.afs.collection('orders').add(args);
    }
}
