import {Model} from "../model";

export class Order extends Model {
    userId: string;
    createdAt: string;
    price: number;
    albums: number;
    status: number;


    constructor(document = null) {
        super();
        if (document != null) {
            this.fromDocument(document);
        }
    }

    fromDocument(document) {
        this.id = document.id;
        this.userId = document.data().userId;
        this.price = document.data().price;
        this.albums = document.data().albums;
        this.status = document.data().status;
        this.createdAt = document.data().createdAt != null ? document.data().createdAt.toDate().toLocaleString() : '';
    }

}
