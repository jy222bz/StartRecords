import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from "../../../../../shared/services/categoreis/categories.service";
import {ProductsService} from "../../../../../shared/services/products/products.service";


@Component({
    selector: 'app-admin-products-add',
    templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private productsService: ProductsService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<AddComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.form = this.fb.group({
            'name': ['Test', [Validators.required, Validators.minLength(4)]],
            'year': ['1999', [Validators.required, Validators.minLength(4)]],
            'artist': ['Niko', [Validators.required, Validators.minLength(4)]],
            'producer': ['Ville', [Validators.required, Validators.minLength(4)]],
            'price': [0, [Validators.required]],
            'duration': [0, [Validators.required]],
            'image': [0],
            'description': [''],
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
        this.productsService.add(this.form.value)
            .then(
                (data) => {
                    this.working = false;
                    this.dialog.close(data);
                },
                (error) => {
                    this.error = (error.status === 0) ? error.message : error.error;
                    this.working = false;
                }
            );
        return false;
    }

    close() {
        this.dialog.close();
    }
}
