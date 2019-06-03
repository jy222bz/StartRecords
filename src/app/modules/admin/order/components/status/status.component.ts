import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../../../../shared/services/orders/order.service';
import {EmailService} from '../../../../../shared/services/email.service';
import {UserService} from "../../../../../shared/services/user/user.service";


@Component({
    selector: 'app-admin-orders-status',
    templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private orderService: OrderService,
        private emailService: EmailService,
        private userService: UserService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<StatusComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {
        this.form = this.fb.group({
            status: [data.status, [Validators.required]],
        });

    }

    ngOnInit() {

    }

    save() {
        if (!this.form.valid) {
            Object.keys(this.form.controls).forEach(field => {
                const control = this.form.get(field);
                control.markAsTouched({onlySelf: true});
            });
            return false;
        }
        this.working = true;
        this.error = null;
        const data = {
            status: parseInt(this.form.controls.status.value, 10)
        };
        this.orderService.set(this.data.id, data)
            .then((next) => {
                    this.working = false;
                    this.dialog.close(data);
                    this.sendEmail(this.data.userId, this.data.id, data.status);
                }
            )
            .catch((error) => {
                this.error = (error.status === 0) ? error.message : error.error;
                this.working = false;
            });
        return false;
    }

    sendEmail(userId, orderId, orderStatus) {
        this.userService.get(userId)
            .subscribe((next) => {
                this.emailService.sendOrderUpdate(next.data().name, next.data().email
                    , orderId, this.getStatus(orderStatus))
                    .subscribe(
                        (next) => {
                            console.log(next);
                        },
                        (error) => {
                            console.log(error);
                        }
                    )
            }, (error) => {
                console.log(error);
            });
    }

    getStatus(status) {
        switch (status) {
            case 0:
                return 'Ordered';
            case 1:
                return 'Processing';
            case 2:
                return 'Shipping';
            case 3:
                return 'Sent';
            default:
                return 'Unknown';
        }
    }

    close() {
        this.dialog.close();
    }
}
