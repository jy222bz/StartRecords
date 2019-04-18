import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Category} from "../../models/categories/category";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable()
export class CategoriesService {

    categories: Observable<Category[]>;
    private categoryCollection: AngularFirestoreCollection<Category>;
    constructor(private afs: AngularFirestore) {
        this.categoryCollection = afs.collection<Category>('categories');
        this.categories = this.categoryCollection.valueChanges();
    }

    get(args = null) {
        return this.afs.collection<Category>('categories').valueChanges();
    }



    add(category: Category) {

        this.categoryCollection.add(category);
    }

    delete(category:Category) {


    }

}
