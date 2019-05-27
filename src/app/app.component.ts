import {Component, isDevMode, OnInit} from '@angular/core';
import {NotificationsService} from "./shared/services/notifications.service";
import {SessionService} from "./shared/services/session.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private emailService: NotificationsService,
        private sessionService: SessionService,
    ) {

    }

    ngOnInit(): void {
        this.emailService.sendEmail('oz222am@student.lnu.se');
    }

    prepareSession() {
        this.sessionService.addConnectedListener(() => {
            this.sessionConnected();
        });
        if (isDevMode()) {
            this.sessionService.connect('ws://manage.snabbs.local:23000/ws');
        } else {
            if ((location.protocol !== 'https:')) {
                this.sessionService.connect('ws:/presentation.softuza.com:22000/ws');
            } else {
                this.sessionService.connect('wss://presentation.softuza.com:23000/ws');
            }
        }
    }

    sessionConnected() {

    }

}
