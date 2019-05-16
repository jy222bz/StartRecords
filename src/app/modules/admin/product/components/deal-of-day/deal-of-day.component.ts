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

    
        return false;
    }

    close() {
        this.dialog.close();
    }
}
