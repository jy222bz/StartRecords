import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from "../../../../../shared/services/events.service";
import {slideDownAnimation} from "../../../../../shared/animations/slide-down-animation";


@Component({
    selector: 'app-products-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [slideDownAnimation],
})
export class SearchComponent implements OnInit, OnDestroy {
    visible = null;

    constructor(private eventsService: EventsService) {

    }

    ngOnInit(): void {
        this.registerShowEvent();
    }

    ngOnDestroy(): void {
        this.unregisterShowEvent();
    }

    private registerShowEvent() {
        this.eventsService.registerEvent('PRODUCTS-SEARCH-SHOW', this, () => {
            this.visible = true;
        });
    }

    private unregisterShowEvent() {
        this.eventsService.unregisterEvent('PRODUCTS-SEARCH-SHOW', this);
    }

    getShowState() {
        return this.visible ? 'in' : 'out'
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
