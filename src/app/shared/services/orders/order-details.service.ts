import {Injectable} from '@angular/core';
import {Category} from "../../models/categories/category";
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from "rxjs/operators";
import {firestore} from 'firebase/app';
import {Order} from "../../models/orders/order";
import {OrderDetails} from "../../models/orders/order-details";

@Injectable()
export class OrderDetailsService {

    constructor(private afs: AngularFirestore) {

    }

    get(orderId, args = null) {
        return this.afs.collection<OrderDetails>('order_details',
            ref => ref.where('orderId', '==', orderId)
            ).snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => ({
                        id: item.payload.doc.id,
                        orderId: item.payload.doc.data().orderId,
                        productId: item.payload.doc.data().productId,
                        price: item.payload.doc.data().price,
                        count: item.payload.doc.data().count,
                    }))
                }));
    }

    add(id, args) {
        return this.afs.collection('order_details').add(args);
    }
}
