import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import {firestore} from 'firebase/app';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';

export interface Item { id: string; itemName: string; }

@Component({
    selector: 'app-main-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css', '../../assets/css/icon.css'],
})

export class searchComponent {

    keyword = '';
    brand = '';
    price1 = '';
    price2 = '';
    rating = '';
    items: any;

    constructor(private readonly fs: firestore,
                private route: ActivatedRoute,
                private authService: AuthenticationService) {
        this.keyword = this.route.snapshot.queryParams.keyword;
        this.brand = this.route.snapshot.queryParams.brand;
        this.price1 = this.route.snapshot.queryParams.price1;
        this.price2 = this.route.snapshot.queryParams.price2;
        this.rating = this.route.snapshot.queryParams.rating;
        this.items = new Array();
        fs.readAllGoods().subscribe( itemList => {
            for(let i = 0; i < itemList.length; i++){
                const item = itemList[i];
                if(
                    ((this.keyword && this.keyword !== '' && item.itemName.toLowerCase().indexOf(this.keyword.toLowerCase())>-1) || !this.keyword || this.keyword=='') &&
                    ((this.brand && this.brand !== '' && item.itemBrand==this.brand) || !this.brand || this.brand === '') &&
                    ((this.price1 && this.price1 !== '' && item.itemPrice>=parseInt(this.price1)) || !this.price1 || this.price1 === '') &&
                    ((this.price2 && this.price2 !== '' && item.itemPrice <= parseInt(this.price2)) || !this.price2 || this.price2 === '')
                ){
                    fs.getRatingByItemId(item.id).subscribe( r => {
                        let rate = r.length==0 ? 5 : r[0].totalRating / r[0].totalRaters;
                        if((this.rating && this.rating !== '' && rate >= parseFloat(this.rating)) || !this.rating || this.rating==''){
                            this.items.push(item);
                        }
                    });
                }
            }
        });
    }

    onSubmit(formValue: any) {
        let href = '/search?keyword=' + formValue.key;
        if(formValue.brand) href += '&brand=' + formValue.brand;
        if(formValue.price1) href += '&price1=' + formValue.price1;
        if(formValue.price2) href += '&price2=' + formValue.price2;
        if(formValue.rating) href += '&rating=' + formValue.rating;
        window.location.href = href;
    }

    isAdmin() {
        return this.authService.isAdmin();
    }

}
