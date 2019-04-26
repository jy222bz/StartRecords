import {Model} from "../model";

export class Product extends Model{
    name: string;
    artist: string;
    producer: string;
    imageUrl: string;
    price: number;
    duration: number;
}
