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


    getTheDurationOfTheTracks() {
        if (Track.length == 0)
            return "There are no tracks at this time.";
        else {
            let sum = 0;
            for (let i = 0; i < Track.length; i++) {
                sum += Track[i].time;
            }

        }
        return "The duration of the tracks is:  minute[s].";
    }

}
