import {Component, OnInit} from '@angular/core';
import {AddComponent} from "./components/add/add.component";
import {MatDialog} from "@angular/material";
import {Category} from "../../../shared/models/categories/category";
import {ItemsComponent} from "../../../shared/components/items/items.component";
import {TracksService} from "../../../shared/services/tracks/tracks.service";


@Component({
    selector: 'app-admin-tracks',
    templateUrl: './tracks.component.html',
})
export class TracksComponent extends ItemsComponent<Category> implements OnInit {
    displayedColumns = ['select', 'name'];

    constructor(
        private tracksService: TracksService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(AddComponent, {autoFocus: true, width: '480px'});
        ref.afterClosed().subscribe(result => {

        });
    }

    // ----------------------
    get() {
        /*
        this.categoriesService.get().subscribe(
            (data) => {
                console.log(data);
                this.set(data);
            }
        );

         */
    }
}

