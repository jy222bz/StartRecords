import {Model} from "../model";

export class Order extends Model {
    userId: string;
    price: number;
    status: number;
}
