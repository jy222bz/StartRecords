import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../../../../../shared/services/upload.service';
import {ProductService} from "../../../../../shared/services/products/product.service";


@Component({
    selector: 'app-admin-product-deal-of-day',
    templateUrl: './deal-of-day.component.html',
})
export class DealOfDayComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private productService: ProductService,
        private imagesService: UploadService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<DealOfDayComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            name: [data.name, [Validators.required, Validators.minLength(1)]],
        });
    }

    ngOnInit() {

    }

    save() {
        if (!this.form.valid) {
            Object.keys(this.form.controls).forEach(field => {
                const control = this.form.get(field);
                control.markAsTouched({onlySelf: true});
            });
            return false;
        }
        this.working = true;
        this.error = null;

        this.saveProduct();
        return false;
    }


    saveProduct() {
        const data: any = {
            name: this.form.controls.name.value,
            year: this.form.controls.year.value,
            artist: this.form.controls.artist.value,
            producer: this.form.controls.producer.value,
            price: this.form.controls.price.value,
            description: this.form.controls.description.value,
        };
        this.productService.set(this.data.id, data)
            .then(() => {
                    this.working = false;
                    this.dialog.close(data);
                }
            )
            .catch((error) => {
                this.error = (error.status === 0) ? error.message : error.error;
                this.working = false;
            });
    }

    close() {
        this.dialog.close();
    }
}
