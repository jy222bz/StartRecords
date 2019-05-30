import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../../../shared/models/products/product';

@Component({
    selector: 'app-products-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() item: Product;
    @Input() height: string;

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

    getDuration() {
        return Math.floor(this.item.duration / 60);
    }
}


