import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from "../../../../../shared/services/categoreis/categories.service";
import {TracksService} from "../../../../../shared/services/tracks/tracks.service";


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
        private fb: FormBuilder,
        private dialog: MatDialogRef<AddComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.form = this.fb.group({
            'name': ['', [Validators.required, Validators.minLength(4)]],
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

        /*
        this.tracksService.add(this.form.value)
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
        */
        return false;
    }

    close() {
        this.dialog.close();
    }
}
