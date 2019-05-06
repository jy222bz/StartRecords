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

    constructor(id = '', name = '', producer = '', artist = '', price = 0, duration = 0, cover = '', description = '',
                total = 0, createdAt = null, year = null, columnSpan = 1, rowSpan = 1
    ) {
        super();
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.price = price;
        this.total = total;
        this.duration = duration;
        this.description = description;
        this.cover = cover;
        this.createdAt = createdAt != null ? createdAt.toDate().toLocaleString() : '';
        this.columnSpan = columnSpan;
        this.rowSpan = rowSpan;
        this.year = year;
        this.producer = producer;
    }
}
