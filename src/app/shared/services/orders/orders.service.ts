import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from "rxjs/operators";
import {firestore} from 'firebase/app';
import {Order} from "../../models/orders/order";

@Injectable()
export class OrdersService {

    constructor(private afs: AngularFirestore) {

    }

    get(userId = '') {
        return this.afs.collection<Order>('orders',
            ref => ref.where('userId', '==', userId)
        ).snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => {
                        return new Order(item.payload.doc);
                    });
                }));
    }

    add(args) {
        args.created_at = firestore.FieldValue.serverTimestamp();
        return this.afs.collection('orders').add(args);
    }
}
