import { TestBed, inject } from '@angular/core/testing';
import {ProductComponent} from "./product.component";

describe('ProductISShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductComponent]
        });
    });

    it('Product be Shown', inject([ProductComponent], (service: ProductComponent) => {
        expect(service).toBeTruthy();
    }));
});
