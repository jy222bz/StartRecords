import {Model} from "../model";

export class Track extends Model
{
    name: string;
    description: string;
    productId: string;
    duration: number;
}
