import {Injectable} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";


@Injectable()
export class ImagesService {
    constructor(private afs: AngularFireStorage) {

    }

    upload(path, name, file) {
        return new Promise((resolve, reject) => {
            this.afs.upload(path + name, file)
                .snapshotChanges()
                .subscribe(
                    (next) => {
                        next.ref.getDownloadURL().then(
                            data => {
                                resolve(data);
                            }
                        )
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });

    }

}