import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {TracksService} from "../../../../../shared/services/tracks/tracks.service";


@Component({
    selector: 'app-admin-tracks-delete',
    templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit {
    working = false;
    error = null;

    constructor(
        private tracksService: TracksService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<DeleteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {


    }

    ngOnInit() {

    }

    save() {
        this.working = true;
        this.error = null;
        /*
        this.categoriesService.delete(this.data)
            .subscribe(
                (data) => {
                    this.working = false;
                    this.dialog.close(data['items']);
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
