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
            'city': ['Växjö', [Validators.required, Validators.minLength(1)]],
            'postalNumber': [35252, [Validators.required, Validators.minLength(5)]],
            'street': ['', [Validators.required]],
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


        this.userAddressesService.add(this.authenticationService.getId(), {
            'address': {
                city: this.form.value.city,
                postalNumber: this.form.value.postalNumber,
                street: this.form.value.street
            }
        });
        return false;
    }

    close() {
        this.dialog.close();
    }
}
