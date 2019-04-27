import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from "../../../../../shared/services/products/products.service";
import {ImagesService} from "../../../../../shared/services/images.service";


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
        private imagesService: ImagesService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<AddComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.form = this.fb.group({
            'name': ['Test', [Validators.required, Validators.minLength(4)]],
            'year': ['1999', [Validators.required, Validators.minLength(4)]],
            'artist': ['Niko', [Validators.required, Validators.minLength(4)]],
            'producer': ['Ville', [Validators.required, Validators.minLength(4)]],
            'price': [0, [Validators.required]],
            'duration': [0],
            'total': [0],
            'cover': [''],
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

        if (this.form.controls.cover.value !== '') {
            const name = new Date().getTime() + '-' + Math.random().toString(36).substring(2);
            this.imagesService.upload('/products/covers/', name, this.form.controls.cover.value.files[0])
                .then((data) => {
                    this.saveProduct(data);
                })
                .catch((error) => {
                    this.working = true;
                    this.error = error;
                });
        } else {
            this.saveProduct('');
        }
        return false;
    }


    saveProduct(cover) {
        let data: any = {
            name: this.form.controls.name.value,
            year: this.form.controls.year.value,
            artist: this.form.controls.artist.value,
            producer: this.form.controls.producer.value,
            price: this.form.controls.price.value,
            duration: this.form.controls.duration.value,
            description: this.form.controls.description.value,
            cover: cover,
            total: 0,
        };
        this.productsService.add(data)
            .then((next) => {
                    this.working = false;
                    data.id = next.id;
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
