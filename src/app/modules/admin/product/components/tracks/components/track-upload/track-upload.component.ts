import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from "../../../../../../../shared/services/upload.service";
import {ProductTracksService} from "../../../../../../../shared/services/products/product-tracks.service";
import {ProductTrackService} from "../../../../../../../shared/services/products/product-track.service";


@Component({
    selector: 'app-admin-product-tracks-upload',
    templateUrl: './track-upload.component.html',
})
export class TrackUploadComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private productTrackService: ProductTrackService,
        private uploadService: UploadService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<TrackUploadComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            'cover': [''],
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

        this.uploadImage();
        return false;
    }

    uploadImage() {
        if (this.form.controls.cover.value !== '') {
            const name = new Date().getTime() + '-' + Math.random().toString(36).substring(2);
            this.uploadService.upload('/products/' + this.data.productId + '/tracks/', name, this.form.controls.cover.value.files[0])
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
    }

    saveProduct(file) {
        let data: any = {
            file: file,
        };
        this.productTrackService.set(this.data.id, data)
            .then(() => {
                    this.working = false;
                    this.data.file = file;
                    this.dialog.close(this.data);
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
