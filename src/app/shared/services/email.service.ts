import {Injectable} from '@angular/core';


@Injectable()
export class EmailService {
    constructor() {


    }


    send(email) {
        /*
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yourgmailaccount@gmail.com',
                pass: 'yourgmailaccpassword'
            }
        });

        const mailOptions = {
            from: '"Dave" <dave@example.net>',
            to: '${user.email}',
            subject: 'Welcome!',
            html: `<YOUR-WELCOME-MESSAGE-HERE>`
        };
        return transporter.sendMail(mailOptions)
            .then(() => console.log('dbCompaniesOnUpdate:Welcome confirmation email'))
            .catch((error) => console.error('There was an error while sending the email:', error))

*/
    }

}
