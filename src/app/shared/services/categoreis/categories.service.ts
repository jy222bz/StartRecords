import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Category} from "../../models/categories/category";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable()
export class CategoriesService {

    constructor(private afs: AngularFirestore) {

    }

    get(args = null) {
        return this.afs.collection<Category>('categories').valueChanges();
    }

    add(arg) {
        return this.afs.collection('categories').add(arg);
    }

    delete(category:Category) {


    }

}
