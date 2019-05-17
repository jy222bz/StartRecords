import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-admin-products-filter',
    templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialogRef<FilterComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            'filter': [data.filter, [Validators.minLength(1)]],
            'value': [data.value, [Validators.minLength(1), Validators.pattern("^[0-9]*$")]],
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

        this.data.filter = this.form.controls.filter.value;
        this.data.value = parseInt(this.form.controls.value.value, 10);
        this.dialog.close(this.data);

        return false;
    }

    close() {
        this.dialog.close();
    }
}
