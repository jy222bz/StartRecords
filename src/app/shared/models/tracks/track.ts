import {Model} from "../model";

export class Track extends Model {
    name: string;
    description: string;
    productId: string;
    duration: number;
    createdAt: string;

    constructor(id = '', name = '', description = '', productId = '', duration = 0, createdAt = null) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.productId = productId;
        this.duration = duration;
        this.createdAt = createdAt != null ? createdAt.toDate().toLocaleString() : '';
    }

}
