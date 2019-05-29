import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-products-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialogRef<SearchComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            'name': [data.filter, [Validators.pattern("^[0-9]*$")]],
        });
    }

    ngOnInit() {

    }

    save() {

    }


}
