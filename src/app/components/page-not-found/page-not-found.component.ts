import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-page-not-found]',
  template: `<div> 
            ERROR! The page was not found. 
             </div>`,
  styles: [`div {color: red; 
  }`]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
