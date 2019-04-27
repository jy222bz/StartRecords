import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TracksService} from "../../../../../shared/services/tracks/tracks.service";
import {ProductService} from "../../../../../shared/services/products/product.service";


@Component({
    selector: 'app-admin-tracks-add',
    templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private tracksService: TracksService,
        private productService: ProductService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<AddComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            'name': ['Song 1', [Validators.required, Validators.minLength(4)]],
            'duration': [600, [Validators.required]],
            'description': ['This is our first track'],
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

        let data: any = {
            productId: this.data.productId,
            name: this.form.controls.name.value,
            duration: this.form.controls.duration.value,
        };

        this.tracksService.add(data)
            .then((next) => {
                this.working = false;
                this.productService.updateDuration(this.data.productId, this.form.controls.duration.value).then();
                data.id = next.id;
                this.dialog.close(data);
            })
            .catch((error) => {
                this.error = (error.status === 0) ? error.message : error.error;
                this.working = false;
            });
        return false;
    }

    close() {
        this.dialog.close();
    }
}
