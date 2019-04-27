import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Track} from "../../models/tracks/track";


@Injectable()
export class TracksService {


    constructor(private afs: AngularFirestore) {

    }

    get(productId, args = null) {
        return this.afs.collection<Track>('tracks',
                ref => ref.where('productId', '==', productId)).valueChanges();
    }

    add(args) {
        return this.afs.collection('tracks').add(args)
            ;
    }

}
