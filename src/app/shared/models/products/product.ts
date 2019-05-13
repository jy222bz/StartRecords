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

    constructor(id = '', name = '', producer = '', artist = '', price = 0, duration = 0, cover = '', description = '',
                total = 0, createdAt = null, year = null, columnSpan = 1, rowSpan = 1,
                totalRatings = 0, numberOfRatings = 0
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

        this.totalRatings = totalRatings;
        this.numberOfRatings = numberOfRatings;
    }
}
