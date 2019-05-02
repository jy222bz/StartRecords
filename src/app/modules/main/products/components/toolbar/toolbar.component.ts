import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";



// @ts-ignore
@Component({
    selector: 'app-main-products-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']

})
export class ToolbarComponent implements OnInit {


    constructor(
        private dialog: MatDialog,
        private router: Router,
    ) {
    }


    ngOnInit(): void {

    }



}
