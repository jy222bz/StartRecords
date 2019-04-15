import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Category} from "../../models/categories/category";


@Injectable()
export class CategoriesService {


    constructor(private afs: AngularFirestore) {

    }

    get() {
        return this.afs.collection<Category>('categories').valueChanges();
    }

    add(args) {

    }

    delete(args) {

    }

}
