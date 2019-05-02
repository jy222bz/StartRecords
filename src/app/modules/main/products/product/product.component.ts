import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../../../shared/models/products/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

    defaultImage = 'https://firebasestorage.googleapis.com/v0/b/dv508-grp-2.appspot.com/o/products%2Fdefault-album-art.png?alt=media&token=d428c29b-0880-4387-b1a5-be0ecc51db13';
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
        console.log(event)
    }
}


