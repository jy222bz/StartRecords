import {Model} from "../model";

export class Product extends Model {
    name: string;
    artist: string;
    producer: string;
    //year: string; TODO Fix year
    cover: string;
    price: number;
    total: number;
    duration: number;
    description: string;
    createdAt: string;

    constructor(id = '', name = '', producer = '', artist = ''/*,year = ''*/, price = 0, duration = 0, cover = '', description = '',
                total = 0, createdAt = null
    ) {
        super();
        this.id = id;
        this.name = name;
        this.artist = artist;
        //this.year = year;
        this.price = price;
        this.total = total;
        this.duration = duration;
        this.description = description;
        this.cover = cover;
        this.createdAt = createdAt != null ? createdAt.toDate().toLocaleString() : '';
    }
}
