import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {ImagesService} from "../../../../../shared/services/images.service";
import {ImageUploadComponent} from "./component/upload/image-upload.component";



@Component({
    selector: 'app-admin-product-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

    @Input() cover;
    @Input() productId;

    constructor(
        private imagesService: ImagesService,
        private dialog: MatDialog,
        private router: Router,
    ) {
    }

    ngOnInit(): void {

    }

    openUploadComponent() {
        const ref = this.dialog.open(ImageUploadComponent, {autoFocus: true, minWidth: 400, data: {
            productId: this.productId, cover: this.cover
            }});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.cover = result.cover;
            }
        });
    }


}
