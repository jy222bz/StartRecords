import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

    constructor(
        private dialog: MatDialogRef<ErrorComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {
    }

    ngOnInit() {

    }

    close() {
        this.dialog.close();
    }
}
