import {Model} from "../model";

export class OrderDetails extends Model {
    orderId: string;
    productId: number;
    count: number;
    price: number;
}
