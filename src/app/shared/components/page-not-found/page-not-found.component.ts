import {Component, OnInit} from '@angular/core';

@Component({
    selector: '[app-page-not-found]',
    template: `<div> 
            404 - ERROR! The page was not found. 
             </div>`,
    styles: [`div {font-style: italic; color: red; 
  }`]
})
export class PageNotFoundComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
