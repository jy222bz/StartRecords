import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductTracksService} from "../../../../../../../shared/services/products/product-tracks.service";
import {ProductService} from "../../../../../../../shared/services/products/product.service";


@Component({
    selector: 'app-admin-tracks-add',
    templateUrl: './tracks-add.component.html',
})
export class TracksAddComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private tracksService: ProductTracksService,
        private productService: ProductService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<TracksAddComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        console.log(data);
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
