import {Model} from "../model";

export class Product extends Model {
    name: string;
    artist: string;
    producer: string;
    cover: string;
    price: number;
    total: number;
    duration: number;
    description: string;

    constructor(id = '', name = '', producer = '', artist = '', price = 0, duration = 0, cover = '', description = '',
                total = 0,
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
    }
}
