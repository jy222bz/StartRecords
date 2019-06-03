import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EmailService {


    constructor(private httpClient: HttpClient) {

    }

    sendOrderUpdate(username, email, OrderId, status) {
        const message = 'Hello ' + username + ',<br><br>' +
            'The status of order #' + OrderId + ' has been updated to \"' + status + '\".<br><br>' +
            'Kind regards,<br><br>' +
            'Star Records team';
        return this.send(email, username,
            'Status update of order #' + OrderId, message);
    }


    private send(email, name, subject, message) {
        return this.httpClient.post('https://manage.softuza.com/email',
            {
                email: email,
                name: name,
                subject: subject,
                message: message
            });
    }

}


