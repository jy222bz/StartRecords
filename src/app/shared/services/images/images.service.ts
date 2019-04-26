import {Injectable} from '@angular/core';
import {Product} from "../../models/products/product";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";


@Injectable()
export class ImagesService {
    constructor(private afs: AngularFireStorage) {

    }

    upload(name, file) {
        this.afs.upload('/images/' + name, file);
    }

}
