import {Injectable} from '@angular/core';

import {AngularFireDatabase} from "@angular/fire/database";
import {Product} from "../../models/products/product";


@Injectable()
export class ProductsService {


    constructor(private db: AngularFireDatabase) {

    }

    get() {
        console.log('getting list');
        return this.db.list<Product>('/products')
    }

    add(args) {

    }


}
