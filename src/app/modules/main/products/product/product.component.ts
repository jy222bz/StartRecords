import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

    @Input() item;

    constructor(
        private router: Router,
    ) {

    }

    ngOnInit(): void {
    }

    navigate() {
        this.router.navigate(['/product/' + this.item.id]);
    }

}


