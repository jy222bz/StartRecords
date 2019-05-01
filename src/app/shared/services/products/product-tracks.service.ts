import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Track} from "../../models/tracks/track";
import {map} from "rxjs/operators";
import {firestore} from "firebase";


@Injectable()
export class ProductTracksService {


    constructor(private afs: AngularFirestore) {

    }

    get(id, args = null) {
        return this.afs.collection<Track>('tracks',
            ref => ref.where('productId', '==', id)).snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => ({
                        id: item.payload.doc.id,
                        name: item.payload.doc.data().name,
                        productId: item.payload.doc.data().productId,
                        duration: item.payload.doc.data().duration,
                        description: item.payload.doc.data().description,
                    }))
                }));
    }

    add(args) {
        args.created_at = firestore.FieldValue.serverTimestamp();
        return this.afs.collection('tracks').add(args)
            ;
    }

}
