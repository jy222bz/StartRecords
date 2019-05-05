import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../../../shared/models/products/product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() item: Product;

    constructor(
        private router: Router,
    ) {

    }

    ngOnInit(): void {
    }

    navigate() {
        this.router.navigate(['/product/' + this.item.id]);
    }

    afterImageLoaded(event) {

    }
}


