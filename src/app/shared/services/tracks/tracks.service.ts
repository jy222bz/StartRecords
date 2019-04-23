/*import {Injectable} from '@angular/core';
import {Product} from "../../models/tracks/tracks";
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable()
export class TracksService {

    tracks: Observable<Tracks[]>;

    private tracksCollection: AngularFirestoreCollection<Tracks>;
    constructor(private afs: AngularFirestore) {
        this.tracksCollection = afs.collection<Tracks>('tracks');
        this.tracks = this.tracksCollection.valueChanges();
    }

    get(args = null) {
        return this.afs.collection<Tracks>('tracks').valueChanges();
    }

    add(arg) {
        return this.afs.collection('tracks').add(arg);
    }
    
    getDuration() {
        if (Tracks.length ==0)
            return "There are no tracks.";
        else
        {
            let sum =0;
            for (let i = 0; i < Tracks.length; i++) {
                sum += Tracks[i]
        }

        }
        return "The duration of the tracks is: " + sum + " minute[s].";
    }

}*/
