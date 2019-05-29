import {Component, Input, OnInit} from '@angular/core';
import {EventsService} from "../../../../../shared/services/events.service";


@Component({
    selector: 'app-main-home-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']

})
export class ToolbarComponent implements OnInit {
    _name = 'All Albums';

    @Input()
    set name(value) {
        this._name = value;
    }

    constructor(private eventsService: EventsService) {
    }


    ngOnInit(): void {

    }

    showCategories() {
        this.eventsService.emit('HOME-CATEGORIES-SHOW');
    }

    showFilter() {
        this.eventsService.emit('HOME-FILTER-SHOW');
    }
}
