import { TestBed, inject } from '@angular/core/testing';
import {ProductComponent} from "./product.component";
import {ProductService} from "../../../../../../../shared/services/products/product.service";

describe('ProductISShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductComponent]
        });
    });

    it('Product be Shown', inject([ProductComponent], (service: ProductService) => {
        expect(service).toBeTruthy();
    }));
});
