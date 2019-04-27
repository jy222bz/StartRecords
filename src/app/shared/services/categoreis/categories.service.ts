import {Injectable} from '@angular/core';
import {Category} from "../../models/categories/category";
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from "rxjs/operators";

@Injectable()
export class CategoriesService {

    constructor(private afs: AngularFirestore) {

    }

    get(args = null) {
        return this.afs.collection<Category>('categories').snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => ({
                        id: item.payload.doc.id,
                        name: item.payload.doc.data().name,
                        description: item.payload.doc.data().description,
                    }))
                }));
    }

    add(arg) {
        return this.afs.collection('categories').add(arg);
    }

    delete(id) {


    }

}
