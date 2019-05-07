import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/products/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {MatDialog} from "@angular/material";


@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit {
    public itemCount: number;


    public constructor() {
    }

    public emptyCart(): void {

    }

    public ngOnInit(): void {

    }

    public ngOnDestroy(): void {

    }

}



