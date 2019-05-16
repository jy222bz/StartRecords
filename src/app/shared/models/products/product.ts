import {Model} from '../model';

export class Product extends Model {
    name: string;
    artist: string;
    producer: string;
    cover: string;
    price: number;
    total: number;
    duration: number;
    description: string;
    createdAt: string;
    rowSpan: number;
    columnSpan: number;
    year: number;

    numberOfRatings: number;
    totalRatings: number;
    discount: any;

    constructor(document = null) {
        super();
        if (document != null) {
            this.fromDocument(document);
        }
    }

    fromDocument(document) {
        this.id = document.id;
        this.name = document.data().name;
        this.producer = document.data().producer;
        this.artist = document.data().artist;
        this.price = document.data().price;
        this.duration = document.data().duration;
        this.cover = document.data().cover;
        this.description = document.data().description;
        this.total = document.data().total;
        this.createdAt = document.data().createdAt != null ? document.data().createdAt.toDate().toLocaleString() : '';
        this.year = document.data().year;
        this.columnSpan = document.data().columnSpan === undefined ? 1 : document.data().columnSpan;
        this.rowSpan = document.data().rowSpan === undefined ? 1 : document.data().rowSpan;
        this.totalRatings = document.data().totalRatings;
        this.numberOfRatings = document.data().numberOfRatings;
    }
}
