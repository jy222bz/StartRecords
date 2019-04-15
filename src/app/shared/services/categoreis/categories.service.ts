import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Category} from "../../models/categories/category";


@Injectable()
export class CategoriesService {


    constructor(private db: AngularFireDatabase) {

    }

    get() {
        console.log('getting list');
        return this.db.list<Category>('/categories')
    }

    add(args) {

    }

    delete(args) {

    }

}
