import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/products/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {MatDialog} from "@angular/material";


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

    ngOnInit(): void {
    }


}



