import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {UserAddressesService} from "../../../shared/services/user/user-addresses.service";


@Component({
    selector: 'app-user-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private authenticationService: AuthenticationService,
        private userAddressesService: UserAddressesService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<AddressComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.form = this.fb.group({
            'city': ['', [Validators.required, Validators.minLength(1)]],
            'postalNumber': ['', [Validators.required, Validators.minLength(5)]],
            'street': ['', [Validators.required]],
        });
    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.userAddressesService.get(this.authenticationService.getAccount().uid).subscribe(
            (next) => {
                this.form.controls.city.setValue(next.data().city);
                this.form.controls.street.setValue(next.data().street);
                this.form.controls.postalNumber.setValue(next.data().postalNumber);
            },
            (error) => {

            }
        )
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


        this.userAddressesService.set(this.authenticationService.getAccount().uid, {
            city: this.form.value.city,
            postalNumber: this.form.value.postalNumber,
            street: this.form.value.street

        }).then(() => {
            this.working = false;
            this.dialog.close();
        }).catch((error) => {
            this.working = false;
            this.error = error;
        });
        return false;
    }

    close() {
        this.dialog.close();
    }
}
