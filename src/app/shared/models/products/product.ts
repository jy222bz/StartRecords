import {Model} from "../model";

export class Product extends Model{
    name: string;
    artist: string;
    producer: string;
    cover: string;
    price: number;
    duration: number;
    description: string;
}
