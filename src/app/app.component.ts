import {Component, OnInit} from '@angular/core';
import {EmailService} from "./shared/services/email.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private emailService: EmailService,
    ) {

    }

    ngOnInit(): void {
        this.emailService.send('oz222am@student.lnu.se');
    }

}
